// src/app/noticias/page.tsx
import { criarNoticia } from './actions'

export default function NoticiasPage() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Criar Nova Notícia
      </h1>

      <form action={criarNoticia} className="space-y-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="texto" className="block text-sm font-medium text-gray-700">
            Texto
          </label>
          <textarea
            name="texto"
            id="texto"
            required
            rows={6}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
        >
          Criar Notícia
        </button>
      </form>
    </div>
  )
}
