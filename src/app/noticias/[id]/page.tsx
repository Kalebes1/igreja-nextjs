// src/app/noticias/[id]/page.tsx
import { prisma } from '@/lib/prisma'

interface NoticiaPageProps {
  params: {
    id: string
  }
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const noticia = await prisma.noticia.findUnique({
    where: {
      id: parseInt(params.id)
    },
    include: {
      autor: true
    }
  })

  if (!noticia) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 text-center text-red-600 bg-red-50 rounded">
        Notícia não encontrada.
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{noticia.titulo}</h1>

      <p className="text-gray-700 whitespace-pre-line">{noticia.texto}</p>

      {noticia.autor && (
        <p className="text-sm text-gray-500">
          Autor: <span className="font-medium">{noticia.autor.nome}</span>
        </p>
      )}

      {noticia.data_publicacao && (
        <p className="text-sm text-gray-400">
          Publicado em: {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR')}
        </p>
      )}
    </div>
  )
}
