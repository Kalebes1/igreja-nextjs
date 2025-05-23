import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#156082] p-4">
      <div className="max-w-6xl mx-auto flex items-center space-x-6 text-white">
        <Link href="/" className="hover:underline">Início</Link>
        <Link href="/sobre" className="hover:underline">Sobre</Link>
        <Link href="/agenda" className="hover:underline">Agenda</Link>
        <Link href="/localizacao" className="hover:underline">Localização</Link>
        <Link href="/noticias" className="hover:underline">Notícias</Link>
      </div>
    </nav>
  )
}
