#!/bin/bash

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  🚀 DEPLOY AUTOMÁTICO - TableTennis Pro                  ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Solicitar credenciais
echo "📝 Preencha suas credenciais GitHub:"
echo ""
read -p "GitHub Username: " GITHUB_USER
read -p "GitHub Token (ghp_...): " GITHUB_TOKEN
echo ""

# Validar
if [ -z "$GITHUB_USER" ] || [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Username e Token são obrigatórios!"
    exit 1
fi

echo "🔧 Configurando Git..."
cd /opt/data/tt-landing

# Configurar Git
git config user.name "$GITHUB_USER"
git config user.email "$GITHUB_USER@users.noreply.github.com"

echo "📦 Criando repositório GitHub..."

# Criar repo via API
REPO_NAME="tabletennis-landing"
curl -s -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"Landing page para validação do app TableTennis Pro\",\"private\":false}" \
  > /tmp/repo_response.json

# Verificar se criou
if grep -q "\"id\":" /tmp/repo_response.json; then
    echo "✅ Repositório criado: https://github.com/$GITHUB_USER/$REPO_NAME"
else
    echo "⚠️  Repositório já existe ou erro ao criar"
    echo "Continuando com push..."
fi

echo ""
echo "📤 Fazendo push do código..."

# Configurar remote com token
git remote remove origin 2>/dev/null
git remote add origin https://$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git

# Push
git branch -M main
git push -u origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ PUSH CONCLUÍDO COM SUCESSO!"
    echo ""
    echo "🌐 Ativando GitHub Pages..."
    
    # Ativar GitHub Pages via API
    curl -s -X POST \
      -H "Authorization: token $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/repos/$GITHUB_USER/$REPO_NAME/pages \
      -d '{"source":{"branch":"main","path":"/"}}' \
      > /dev/null 2>&1
    
    echo ""
    echo "╔══════════════════════════════════════════════════════════╗"
    echo "║  ✅ DEPLOY COMPLETO!                                     ║"
    echo "╚══════════════════════════════════════════════════════════╝"
    echo ""
    echo "📍 Repositório: https://github.com/$GITHUB_USER/$REPO_NAME"
    echo "🌐 Landing Page: https://$GITHUB_USER.github.io/$REPO_NAME/"
    echo ""
    echo "⏰ Aguarde 2-3 minutos para o GitHub Pages processar"
    echo ""
    echo "✅ Próximos passos:"
    echo "   1. Acesse a URL acima em 2-3 minutos"
    echo "   2. Configure Facebook Ads (segunda)"
    echo "   3. Meta: 100 emails até 28/10"
    echo ""
else
    echo ""
    echo "❌ Erro no push!"
    echo "Verifique suas credenciais e tente novamente"
    exit 1
fi
