# TableTennis Pro - Landing Page

Landing page para validação de mercado do app TableTennis Pro.

## 🎯 Objetivo

Coletar 100 emails em 14 dias para validar demanda antes de desenvolver MVP.

## 🚀 Rodando Localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## 📦 Deploy

### Vercel (recomendado)

```bash
npm i -g vercel
vercel --prod
```

Ou via dashboard: https://vercel.com/new

## 📊 Integração Formulário

**Opção 1: Google Forms (mais rápido)**
1. Criar Google Form com campos: nome, email, nível
2. Copiar link embed
3. Substituir `<form>` em `app/page.tsx`

**Opção 2: Mailchimp**
1. Criar lista em mailchimp.com
2. Copiar código embed form
3. Colar em `app/page.tsx`

**Opção 3: Firebase (quando criar projeto)**
```typescript
import { addDoc, collection } from 'firebase/firestore';
const handleSubmit = async (e) => {
  e.preventDefault();
  await addDoc(collection(db, 'waitlist'), {
    name, email, level, createdAt: new Date()
  });
};
```

## 🎨 Estrutura

- `/` - Home (hero + features + waitlist)
- `/sobre` - Problema, solução, roadmap
- `/privacidade` - Política LGPD
- `/contato` - Email contato

## 📈 Métricas

**Meta:** 100 emails em 14 dias

**Tráfego:**
- R$ 200 Facebook Ads
- Posts orgânicos (10 grupos TT)
- Reddit r/tabletennis

## ✅ Checklist

- [x] Landing desenvolvida
- [x] SEO meta tags
- [x] Responsive
- [ ] Formulário integrado
- [ ] Deploy Vercel
- [ ] Domínio .com.br
- [ ] Facebook Ads
