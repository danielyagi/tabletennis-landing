export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contato</h1>
        
        <div className="bg-slate-800 rounded-xl p-8">
          <p className="text-gray-300 mb-6 text-center">
            Tem dúvidas ou sugestões? Entre em contato conosco:
          </p>

          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <a href="mailto:contato@tabletennispro.com.br" className="text-blue-400 hover:text-blue-300 text-lg">
                contato@tabletennispro.com.br
              </a>
            </div>

            <div className="text-center pt-6 border-t border-slate-700">
              <p className="text-gray-400 text-sm mb-4">Ou cadastre-se na waitlist e responda nosso email de confirmação</p>
              <a 
                href="/#waitlist" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Ir para Cadastro
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
