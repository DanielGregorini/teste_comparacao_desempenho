"use client";
import Cliente from "@/classes/client";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchClientes() {
  await sleep(4.5);
  const res = await fetch("http://localhost:3000/clients.json"); // ajuste o caminho se necessário
  const data = await res.json();

  return data.map(
    (cliente: any) =>
      new Cliente(cliente.id, cliente.nome, cliente.email, cliente.telefone)
  );
}

export default async function Home() {
  const clientes = await fetchClientes();

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
        {/*{clientes.map((cliente) => (
        <div
          key={cliente.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <img
            className="w-full"
            src="/image1.jpg"
            alt={`Foto de ${cliente.nome}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cliente.nome}</div>
            <p className="text-gray-700 text-base">Email: {cliente.email}</p>
            <p className="text-gray-700 text-base">
              Telefone: {cliente.telefone}
            </p>
          </div>
        </div>
      ))u*/ }
      
      </div>
      
    </main>
  );
}
