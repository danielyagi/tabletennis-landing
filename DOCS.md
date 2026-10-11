# Landing Page: TableTennis Pro

**Status:** ✅ Desenvolvida  
**URL Local:** http://localhost:3000  
**Deploy:** Pronto para Vercel

---

## 📋 Páginas Criadas

1. **/** (Home)
   - Hero com proposta de valor
   - 4 features principais (placar, vídeos, equipamentos, treinos)
   - Social proof (250+ interessados)
   - Formulário waitlist (nome, email, nível)
   - Footer com links

2. **/sobre**
   - Problema + Solução
   - Para quem é (iniciantes, intermediários, avançados)
   - Roadmap (validação → MVP → premium)

3. **/privacidade**
   - Política de dados
   - LGPD compliant

4. **/contato**
   - Email de contato
   - Link para waitlist

---

## 🎨 Design

- **Cores:** Slate 900 + Blue 500 (gradiente)
- **Typography:** Inter font
- **Responsive:** Mobile-first
- **Tailwind CSS**

---

## 📊 Formulário Waitlist

**Campos:**
- Nome (text, required)
- Email (email, required)
- Nível (select: iniciante/intermediário/avançado)

**TODO:** Integrar com backend (opções):
1. Google Forms embed (mais rápido)
2. Mailchimp API
3. Firebase Firestore (quando criar projeto)

---

## 🚀 Deploy Vercel

```bash
cd /opt/data/tt-landing

# Conectar com GitHub
git remote add origin https://github.com/SEU_USER/tt-landing.git
git add .
git commit -m "Initial landing page"
git push -u origin main

# Vercel CLI (ou via dashboard vercel.com)
npm i -g vercel
vercel --prod
```

**Domínio sugerido:** tabletennispro.com.br (R$ 40/ano)

---

## 📈 Próximos Passos

### HOJE (completar landing):
- [ ] Integrar formulário com Google Forms ou Mailchimp
- [ ] Deploy Vercel
- [ ] Registrar domínio .com.br

### SEGUNDA 14/10:
- [ ] Facebook Ads (R$ 200)
  - Alvo: grupos BR de tênis de mesa
  - Copy: "Cadastre-se para beta gratuito"
  - Landing: tabletennispro.com.br

### 21/10 (7 dias):
- [ ] Revisar emails coletados
- [ ] Meta: 50+ emails

### 28/10 (14 dias):
- [ ] **GO/NO-GO DECISION**
- [ ] Se 100+ emails → build MVP
- [ ] Se < 50 emails → revisar proposta ou abandonar

---

## 📁 Estrutura Arquivos

```
tt-landing/
├── app/
│   ├── page.tsx          # Home
│   ├── sobre/page.tsx    # Sobre
│   ├── privacidade/page.tsx
│   ├── contato/page.tsx
│   ├── layout.tsx        # Meta tags
│   └── globals.css
├── public/
├── package.json
└── tailwind.config.ts
```

---

## ✅ Checklist

- [x] Next.js projeto criado
- [x] Home page (hero + features + waitlist)
- [x] Página Sobre
- [x] Página Privacidade
- [x] Página Contato
- [x] SEO meta tags
- [x] Responsive design
- [x] Dev server rodando
- [ ] Formulário integrado
- [ ] Deploy Vercel
- [ ] Domínio registrado
- [ ] Facebook Ads configurados
