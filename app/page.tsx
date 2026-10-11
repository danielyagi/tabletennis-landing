'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      // Temporary: save to localStorage until we set up backend
      const waitlistData = {
        name: formData.get('name'),
        email: formData.get('email'),
        level: formData.get('level'),
        timestamp: new Date().toISOString()
      };
      
      // Save locally for now
      const existing = JSON.parse(localStorage.getItem('waitlist') || '[]');
      existing.push(waitlistData);
      localStorage.setItem('waitlist', JSON.stringify(existing));
      
      setFormState('success');
      setEmail(formData.get('email') as string);
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            O único app que precisa para<br />
            <span className="text-blue-400">evoluir no Tênis de Mesa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Placar digital, vídeos educacionais, guia de equipamentos e treinos personalizados. Tudo em português, tudo integrado.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a 
              href="#waitlist" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Cadastre-se para o Beta Gratuito
            </a>
            <Link 
              href="/sobre" 
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Saiba Mais
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            ✓ Disponível em breve para iOS e Android · ✓ Totalmente em português
          </p>
        </div>

        {/* Mockup placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-xl">📱 Preview do App em breve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Tudo que você precisa, em um só lugar
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
            <div className="text-5xl mb-4">🏓</div>
            <h3 className="text-2xl font-bold text-white mb-3">Placar Digital</h3>
            <p className="text-gray-300">
              Contador inteligente com histórico de sets, timer de intervalo e estatísticas. Toque na tela para incrementar.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
            <div className="text-5xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold text-white mb-3">Vídeos Curados</h3>
            <p className="text-gray-300">
              30+ tutoriais selecionados: saque, forehand, backhand, footwork. Do iniciante ao avançado.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-3">Guia de Equipamentos</h3>
            <p className="text-gray-300">
              50+ raquetes e borrachas recomendadas por nível e estilo. Encontre o equipamento perfeito para você.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-2xl font-bold text-white mb-3">Treinos Estruturados</h3>
            <p className="text-gray-300">
              Rotinas de treino por nível com timer integrado. Evolua com método.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-blue-900/30 rounded-2xl p-12 text-center">
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seja um dos primeiros <span className="text-blue-400">testadores</span>
          </p>
          <p className="text-gray-300 text-lg">
            Cadastre-se agora e receba acesso antecipado gratuito
          </p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Cadastre-se para o Beta Gratuito
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Receba acesso antecipado assim que lançarmos
          </p>

          {formState === 'success' ? (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Cadastro confirmado!</h3>
              <p className="text-gray-300 mb-4">
                Enviamos uma confirmação para <strong className="text-white">{email}</strong>
              </p>
              <p className="text-gray-400 text-sm">
                Você receberá acesso prioritário quando lançarmos em Janeiro/2027
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-2">
                  Nível de jogo
                </label>
                <select
                  id="level"
                  name="level"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="beginner">Iniciante</option>
                  <option value="intermediate">Intermediário</option>
                  <option value="advanced">Avançado</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
              >
                {formState === 'submitting' ? 'Cadastrando...' : 'Garantir Meu Acesso Gratuito'}
              </button>

              {formState === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Erro ao cadastrar. Tente novamente.
                </p>
              )}
            </form>
          )}

          <p className="text-gray-400 text-sm text-center mt-6">
            Seus dados estão seguros. Não enviaremos spam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">© 2026 TableTennis Pro · Feito com 🏓 no Brasil</p>
          <div className="flex gap-6 justify-center">
            <Link href="/sobre" className="hover:text-white transition">
              Sobre
            </Link>
            <Link href="/privacidade" className="hover:text-white transition">
              Privacidade
            </Link>
            <Link href="/contato" className="hover:text-white transition">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
