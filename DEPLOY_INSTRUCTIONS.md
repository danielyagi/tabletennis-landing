# 🚀 INSTRUÇÕES DE DEPLOY

## 1. Deploy Vercel (Recomendado)

### Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy produção
cd /opt/data/tt-landing
vercel --prod
```

### Via Dashboard (mais fácil)
1. Acesse: https://vercel.com/new
2. Conecte com GitHub/GitLab
3. Importe repositório
4. Deploy automático

## 2. Registrar Domínio

### Opção 1: Registro.br (R$ 40/ano)
1. Acesse: https://registro.br
2. Buscar: tabletennispro.com.br
3. Registrar com CPF
4. Configurar DNS:
   - Tipo: CNAME
   - Nome: @
   - Valor: cname.vercel-dns.com

### Opção 2: Namecheap ($12/ano)
1. Acesse: https://www.namecheap.com
2. Buscar: tabletennispro.com
3. Adicionar ao carrinho
4. Configurar DNS → Vercel

## 3. Conectar Domínio ao Vercel

1. Vercel Dashboard → Settings → Domains
2. Add domain: tabletennispro.com.br
3. Copiar registros DNS
4. Adicionar no Registro.br:
   - A record: 76.76.21.21
   - CNAME www: cname.vercel-dns.com

## 4. Configurar Backend Formulário

### Opção A: Formspree (mais rápido)
1. Acesse: https://formspree.io
2. Criar conta gratuita
3. Criar form
4. Copiar endpoint URL
5. Atualizar app/page.tsx:
   ```typescript
   const response = await fetch('https://formspree.io/f/SEU_ID', {
     method: 'POST',
     body: formData,
     headers: { 'Accept': 'application/json' }
   });
   ```

### Opção B: Google Sheets (free, mais controle)
1. Criar Google Sheet
2. Apps Script:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([new Date(), data.name, data.email, data.level]);
     return ContentService.createTextOutput(JSON.stringify({success: true}));
   }
   ```
3. Deploy as web app
4. Usar URL no fetch

### Opção C: Firebase (quando criar projeto MVP)
- Firestore collection 'waitlist'
- Auth não necessário
- Rules: allow write

## 5. Facebook Ads Setup

### Criar Campanha
1. Business Manager: https://business.facebook.com
2. Ads Manager → Create Campaign
3. Objetivo: **Conversões (Leads)**
4. Nome: "TT Pro - Waitlist Beta"

### Configurar Conjunto de Anúncios
- **Budget:** R$ 200 total (R$ 14,28/dia)
- **Duração:** 14 dias (11/10 - 25/10)
- **Público:**
  - Location: Brasil
  - Age: 18-45
  - Gender: Todos
  - Interests: table tennis, ping pong, sports, fitness
  - Behavior: Engajados com esportes
- **Placements:** Feed + Stories (auto)

### Criar Anúncio
- **Formato:** Imagem única
- **Imagem:** Screenshot app mockup (1080x1080)
- **Título:** "Evolua no Tênis de Mesa 🏓"
- **Texto:**
  ```
  O primeiro app completo em português para jogadores de tênis de mesa.
  
  ✅ Placar digital inteligente
  ✅ 30+ vídeos educacionais
  ✅ Guia de equipamentos
  ✅ Treinos estruturados
  
  Cadastre-se GRÁTIS para o beta e seja um dos primeiros a testar.
  
  Lance previsto: Janeiro 2027
  ```
- **CTA:** "Cadastrar Agora"
- **URL:** https://tabletennispro.com.br

### Pixel de Conversão
```html
<!-- Adicionar em app/layout.tsx -->
<Script id="fb-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'SEU_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

Evento de conversão (app/page.tsx):
```typescript
if (typeof window !== 'undefined' && (window as any).fbq) {
  (window as any).fbq('track', 'Lead');
}
```

## 6. Google Analytics

### Setup
1. Acesse: https://analytics.google.com
2. Criar propriedade: "TableTennis Pro"
3. Copiar ID: G-XXXXXXXXXX

### Instalar
```bash
npm install @next/third-parties
```

app/layout.tsx:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 7. Checklist Pré-Launch

- [ ] Build local sem erros
- [ ] Deploy Vercel sucesso
- [ ] Domínio registrado
- [ ] DNS configurado (propagação 24-48h)
- [ ] Formulário salvando dados
- [ ] Confirmação email funcionando
- [ ] Google Analytics rastreando
- [ ] Facebook Pixel instalado
- [ ] Mobile responsive testado
- [ ] Todos links funcionando
- [ ] Privacy policy acessível
- [ ] Campanha Facebook aprovada

## 8. Monitoramento (Diário)

### Métricas
- Visitas (GA)
- Cadastros (backend)
- CTR ads (Facebook)
- Custo/lead
- Bounce rate

### Onde acompanhar
- Google Analytics: https://analytics.google.com
- Facebook Ads Manager: https://business.facebook.com/adsmanager
- Vercel Analytics: https://vercel.com/dashboard

## 9. Troubleshooting

### Build falha
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### DNS não propaga
- Esperar 24-48h
- Verificar: https://dnschecker.org

### Formulário não salva
- Verificar console browser (F12)
- Testar endpoint manualmente (Postman)
- Verificar CORS

### Ads rejeitado
- Revisar políticas Facebook
- Remover claims exagerados
- Adicionar disclaimer se necessário

## 10. Após 7 dias (18/10)

### Review intermediário
- Total emails coletados
- CAC parcial = R$ gasto ÷ emails
- CTR médio
- Fontes que convertem melhor

### Ajustes
- Se CAC > R$ 5 → ajustar target
- Se CTR < 1% → testar novo copy
- Se bounce > 70% → melhorar landing

## 11. Decisão Final (28/10)

### Critérios GO
- ✅ 100+ emails
- ✅ CAC < R$ 5
- ✅ Feedback 70%+ positivo

### Critérios NO-GO
- ❌ < 50 emails
- ❌ CAC > R$ 10
- ❌ Feedback negativo

### Se GO → Próximos passos
1. Criar projeto Firebase
2. Init Expo project
3. Começar desenvolvimento MVP (8 semanas)
4. Timeline: Nov-Dez código, Jan 2027 launch

### Se NO-GO → Opções
1. Pivotar proposta (testar outro ângulo)
2. Testar outro nicho
3. Abandonar (sem investir mais)
