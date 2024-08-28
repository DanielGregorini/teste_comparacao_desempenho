"use client"
import { useEffect, useState } from 'react';
import Cliente from "@/classes/client";

export default function CSRPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const res = await fetch('http://localhost:3001/clientes');
      const data: Cliente[] = await res.json();
      setClientes(data);
    };

    fetchClientes();
  }, []);

  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      {clientes.map((cliente) => (
        <div
          key={cliente.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <div className="px-6 py-4">
            <div>
              <img
                className="w-24 h-24 object-cover mx-auto mt-4"
                src="/image1.jpg"
                alt={`Foto de ${cliente.nome}`}
              />
            </div>
            <div className="font-bold text-xl mb-2">{cliente.nome}</div>
            <p className="text-gray-700 text-base">Email: {cliente.email}</p>
            <p className="text-gray-700 text-base">
              Telefone: {cliente.telefone}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
