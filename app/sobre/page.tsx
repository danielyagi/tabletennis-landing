import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition">
          ← Voltar
        </Link>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Sobre o Projeto
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">O Problema</h2>
            <p className="text-gray-300 leading-relaxed">
              Jogadores de tênis de mesa no Brasil enfrentam um problema: precisam de múltiplos apps para placar, vídeos educacionais, informações sobre equipamentos e treinos. Além disso, a maioria do conteúdo disponível está em inglês, dificultando o aprendizado.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Nossa Solução</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TableTennis Pro é o primeiro app all-in-one em português para praticantes de tênis de mesa. Em um só lugar você tem:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Placar digital inteligente com histórico e estatísticas</li>
              <li>✓ Biblioteca curada de vídeos educacionais (do básico ao avançado)</li>
              <li>✓ Guia completo de equipamentos com recomendações personalizadas</li>
              <li>✓ Treinos estruturados por nível com timer integrado</li>
              <li>✓ Highlights dos principais campeonatos mundiais</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Para Quem é?</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Iniciantes</h3>
                <p>Aprenda as técnicas corretas desde o começo. Descubra qual equipamento comprar sem gastar demais.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Intermediários</h3>
                <p>Acompanhe sua evolução com estatísticas. Encontre treinos específicos para suas fraquezas.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Avançados</h3>
                <p>Descubra equipamentos profissionais. Assista highlights de campeonatos para se inspirar.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Roadmap</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">📍 Fase Atual: Validação</h3>
                <p className="text-gray-300">Estamos coletando interessados para validar a demanda antes de desenvolver o app completo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">🚀 Próximos 3 meses: MVP</h3>
                <p className="text-gray-300">Desenvolvimento das features principais. Beta gratuito para os primeiros cadastrados.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🎯 6-12 meses: Features Premium</h3>
                <p className="text-gray-300">IA para recomendação de equipamentos, tracking avançado, planos de treino personalizados, comunidade local.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Faça Parte da Jornada</h2>
            <p className="text-gray-300 mb-6">
              Cadastre-se agora e seja um dos primeiros a testar gratuitamente
            </p>
            <Link 
              href="/#waitlist" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Cadastrar Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
