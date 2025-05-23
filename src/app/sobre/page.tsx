export default function Sobrepage() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold text-gray-800">Sobre</h1>

      <p className="mt-4 text-gray-700">
        Somos uma igreja comprometida com a palavra de Deus, com foco na comunhão, ensino e serviço.
      </p>

      <ul className="list-disc list-inside text-gray-700 flex flex-col items-start">
        <li><strong>Missão:</strong> Levar a mensagem de Cristo a todos.</li>
        <li><strong>Data de fundação:</strong> 10 de janeiro de 2001</li>
        <li><strong>Pastor local:</strong> Pr. João da Silva</li>
        <li><strong>Endereço:</strong> Rua das Oliveiras, 123 - Águas Lindas, GO</li>
      </ul>
    </div>
  )
}
