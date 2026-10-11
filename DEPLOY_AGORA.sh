#!/bin/bash

echo "🚀 DEPLOY RÁPIDO - TableTennis Pro"
echo "=================================="
echo ""

# Check se tem Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm i -g vercel
fi

echo "🔐 Você precisa fazer login no Vercel"
echo "    (vai abrir navegador ou mostrar link)"
echo ""

# Login
vercel login

echo ""
echo "🚀 Fazendo deploy..."
vercel --prod

echo ""
echo "✅ DEPLOY CONCLUÍDO!"
echo ""
echo "Sua landing está no ar na URL que apareceu acima ⬆️"
echo ""
