// src/app/noticias/actions.ts
'use server'

import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'


export async function criarNoticia(formData: FormData) {
  const titulo = formData.get('titulo') as string
  const texto = formData.get('texto') as string

  const noticia = await prisma.noticia.create({
    data: {
      titulo,
      texto,
      imagem: '', // ou formData.get('imagem') caso envie imagem
      autor_id: 1 // exemplo fixo, substitua conforme necessário
    }
  })

  redirect(`/noticias/${noticia.id}`) // redireciona para a página da notícia criada
}
