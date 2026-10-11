export default function Privacidade() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-6">
          <div className="bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Coleta de Dados</h2>
            <p className="text-gray-300">
              Coletamos apenas nome, email e nível de jogo durante o cadastro na waitlist. 
              Estes dados são armazenados de forma segura e não são compartilhados com terceiros.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Uso dos Dados</h2>
            <p className="text-gray-300">
              Seus dados serão utilizados exclusivamente para:
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 mt-4">
              <li>Notificar sobre o lançamento do app</li>
              <li>Enviar convite para beta gratuito</li>
              <li>Comunicações relacionadas ao TableTennis Pro</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Seus Direitos</h2>
            <p className="text-gray-300">
              Você pode solicitar a exclusão dos seus dados a qualquer momento entrando em contato conosco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
