import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function NoticiasPage() {
  const noticias = await prisma.noticia.findMany({
    where: { aprovado: true },
    orderBy: { data_publicacao: 'desc' },
    include: { autor: true },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Notícias Publicadas</h1>

      {noticias.length === 0 && (
        <p className="text-gray-600">Nenhuma notícia publicada até o momento.</p>
      )}

      <ul className="space-y-4">
        {noticias.map((noticia) => (
          <li key={noticia.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-blue-700">{noticia.titulo}</h2>

            <p className="text-gray-700 mt-1 line-clamp-3">{noticia.texto}</p>

            <div className="text-sm text-gray-500 mt-2 flex justify-between">
              <span>Autor: {noticia.autor?.nome ?? 'Desconhecido'}</span>
              <span>
                Publicado em:{' '}
                {noticia.data_publicacao
                  ? new Date(noticia.data_publicacao).toLocaleDateString()
                  : '---'}
              </span>
            </div>

            <Link
              href={`/noticias/${noticia.id}`}
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              Ler mais →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
