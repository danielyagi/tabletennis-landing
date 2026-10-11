# 🚀 FASE 0: VALIDAÇÃO - INICIADA

**Data início:** 2026-10-11  
**Prazo:** 14 dias (decisão em 28/10)  
**Budget:** R$ 500

---

## ✅ CONCLUÍDO HOJE

### 1. Landing Page
- [x] 4 páginas desenvolvidas
- [x] Formulário waitlist integrado
- [x] Confirmação visual após cadastro
- [x] LocalStorage temporário (até backend)
- [x] Dev server rodando

### 2. Preparação Deploy
- [x] Arquivo vercel.json criado
- [x] Região GRU1 (São Paulo)
- [x] Env vars preparadas

---

## 📋 PRÓXIMOS PASSOS (Ordem)

### HOJE AINDA (11/10)
- [ ] **Deploy Vercel**
  ```bash
  cd /opt/data/tt-landing
  npm run build  # testar build
  npx vercel --prod  # deploy
  ```

- [ ] **Registrar domínio**
  - tabletennispro.com.br (Registro.br - R$ 40/ano)
  - Alternativa: tabletennispro.com (Namecheap - $12/ano)
  - Configurar DNS → Vercel

- [ ] **Configurar backend formulário**
  - Opção 1: Formspree (free até 50 submissions/mês)
  - Opção 2: Google Sheets via API
  - Opção 3: Firebase (quando criar projeto)

### SEGUNDA 14/10
- [ ] **9h: Facebook Ads Setup**
  - Criar conta Business Manager
  - Campanha: "Conversão - Leads"
  - Budget: R$ 200 (R$ 14,28/dia × 14 dias)
  - Target:
    - Location: Brasil
    - Age: 18-45
    - Interests: table tennis, ping pong, sports
    - Placement: Feed + Stories

- [ ] **11h: Copy dos Ads**
  ```
  Título: Evolua no Tênis de Mesa 🏓
  
  Descrição:
  O primeiro app completo em português:
  ✅ Placar digital inteligente
  ✅ Vídeos educacionais curados
  ✅ Guia de equipamentos
  ✅ Treinos estruturados
  
  Cadastre-se GRÁTIS para o beta →
  
  CTA: Cadastrar Agora
  ```

- [ ] **14h: Posts Orgânicos**
  - 10 grupos Facebook TT Brasil
  - 5 grupos WhatsApp
  - Reddit: r/tabletennis (em inglês)
  - Post:
    ```
    Pessoal, estou desenvolvendo o primeiro app completo
    de tênis de mesa em português. Placar, vídeos, guia
    de equipamentos e treinos integrados.
    
    Quem tiver interesse em testar o beta gratuito:
    tabletennispro.com.br
    
    Feedback é muito bem-vindo! 🏓
    ```

### 18/10 (7 dias)
- [ ] **Review métricas intermediárias**
  - Emails coletados até agora
  - CTR landing (Google Analytics)
  - CAC parcial
  - Fontes de tráfego

- [ ] **Ajustes se necessário**
  - Copy ads
  - Target audiência
  - Landing page (A/B test título?)

### 25/10 (14 dias)
- [ ] **Review métricas finais**
  - Total emails
  - CTR final
  - CAC final
  - Conversão landing
  - Feedback qualitativo

### 28/10 - DECISÃO GO/NO-GO

**Critérios:**

**GO (BUILD MVP):**
- ✅ 100+ emails
- ✅ CAC < R$ 5
- ✅ Feedback positivo (70%+ "usaria")

**CONSIDERAR:**
- ⚠️ 50-99 emails
- ⚠️ CAC R$ 5-10
- ⚠️ Feedback misto

**NO-GO:**
- ❌ < 50 emails
- ❌ CAC > R$ 10
- ❌ Feedback negativo

---

## 💰 BUDGET TRACKING

### Investido
- [ ] Domínio: R$ 40
- [ ] Facebook Ads: R$ 200
- [ ] Vercel: R$ 0 (free tier)
- **Total:** R$ 240

### Reserva
- R$ 260 (para ajustes/testes)

---

## 📊 MÉTRICAS A ACOMPANHAR

### Diárias
- Visitas landing
- Cadastros waitlist
- CTR ads
- Custo/lead

### Semanais
- Total emails
- Fontes tráfego
- Conversão por fonte
- Feedback qualitativo

### Final (28/10)
- Total emails
- CAC médio
- Taxa conversão
- NPS qualitativo

---

## 🔗 LINKS ÚTEIS

- **Landing (dev):** http://localhost:3000
- **Landing (prod):** [aguardando deploy]
- **Facebook Ads:** [aguardando criação]
- **Analytics:** [aguardando setup]

---

## 📝 NOTAS

- Formulário usa localStorage temporário
- Precisa migrar para backend real (Formspree/Firebase)
- Confirmação visual funciona
- Mobile responsive OK

---

**Status:** 🟡 Em andamento  
**Próxima ação:** Deploy Vercel
