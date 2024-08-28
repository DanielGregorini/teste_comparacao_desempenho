export default async function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">
          Escolha o Tipo de Renderização
        </h1>
        <div className="flex space-x-4">
          <a
            href="/csr"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Client Side Rendering (CSR)
          </a>
          <a
            href="/ssr"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
          >
            Server Side Rendering (SSR)
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Aqui você pode adicionar outros elementos ou conteúdo */}
      </div>
    </main>
  );
}
