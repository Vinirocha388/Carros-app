import React from 'react';

export default function BootstrapCardsPage() {
  // Dados de exemplo para os cards
  const cardData = [
    {
      id: 1,
      title: "Relâmpago McQueen",
      description: "O protagonista da franquia, Relâmpago McQueen é um carro de corrida vermelho número 95, com grande talento e um espírito competitivo. Inicialmente, ele é arrogante e egocêntrico, mas ao longo da série, aprende a valorizar a amizade e o trabalho em equipe. Ele passa por uma grande transformação ao conhecer os habitantes de Radiator Springs e se tornar amigo de Doc Hudson.",
      imageUrl: "https://i.pinimg.com/736x/fb/ac/15/fbac1539d1bf5b8e620000d6649aef7b.jpg"
    },
    {
      id: 2,
      title: "Mate",
      description: "O guincho enferrujado e desajeitado, mas de coração enorme, é o melhor amigo de McQueen. Mate é inocente, engraçado e extremamente leal, sempre disposto a ajudar seus amigos. Em 'Carros 2', ele se torna peça-chave na trama de espionagem internacional, sendo confundido com um agente secreto.",
      imageUrl: "https://i.pinimg.com/736x/fc/f6/9e/fcf69e876a1b422a7f1dd100800c1645.jpg"
    },
    {
      id: 3,
      title: "Sally Carrera",
      description: "Uma elegante Porsche 911 azul, Sally é a advogada de Radiator Springs e um dos maiores interesses românticos de McQueen. Ela valoriza a cidade e luta para manter seu charme histórico. Inteligente e bondosa, Sally é uma grande influência positiva na jornada de McQueen.",
      imageUrl: "https://i.pinimg.com/736x/05/d5/de/05d5de99b322ed4b0f785cd9e249b5ff.jpg"
    },
    {
      id: 4,
      title: "Doc Hudson",
      description: "Um ex-piloto lendário conhecido como Hudson Hornet, Doc foi um grande campeão no passado, mas se afastou das corridas após um grave acidente. Ele se torna o mentor de McQueen, ensinando-lhe sobre humildade e técnicas de corrida. Sua experiência e sabedoria são fundamentais para o crescimento do protagonista.",
      imageUrl: "https://i.pinimg.com/736x/bc/f6/3a/bcf63acc650352e691d1e007cc3a1e48.jpg"
    },
    {
      id: 5,
      title: "Ramone",
      description: "Um Chevrolet Impala Lowrider roxo e laranja, dono da loja de pintura de Radiator Springs. Ele adora mudar sua pintura constantemente e tem um espírito descontraído e artístico. Casado com Flo, ele é um dos personagens mais carismáticos da cidade.",
      imageUrl: "https://i.pinimg.com/736x/e5/db/a8/e5dba819f4ddf14d531051905e4ee6f3.jpg"
    },
    {
      id: 6,
      title: "Flo",
      description: "Uma simpática carro clássica americana, dona do posto de gasolina de Radiator Springs. Ela é extrovertida e amigável, sempre recebendo os clientes com entusiasmo. Flo é apaixonada por Ramone e juntos formam um casal icônico.",
      imageUrl: "https://i.pinimg.com/736x/b7/83/18/b7831822bf2834e2e7e2f620c4234642.jpg"
    },
    {
      id: 7,
      title: "Luigi",
      description: "Um Fiat 500 amarelo apaixonado por pneus e pela Ferrari. Ele é dono da loja Casa Della Tires e tem um fiel assistente, Guido. Luigi é animado e fala com um forte sotaque italiano, sempre demonstrando grande orgulho de sua herança.",
      imageUrl: "https://i.pinimg.com/736x/61/92/57/619257ee4c113d167533271660fb8b2b.jpg"
    },
    {
      id: 8,
      title: "Guido",
      description: "Um pequeno empilhador azul e assistente de Luigi, Guido tem habilidades excepcionais na troca de pneus. Embora seja de poucas palavras, sua rapidez e eficiência são impressionantes, tornando-o essencial para a equipe de McQueen.",
      imageUrl: "https://i.pinimg.com/736x/9c/34/e9/9c34e902be1142ba0368eb824b1b7a45.jpg"
    },
    {
      id: 9,
      title: "Finn McMissile (Carros 2)",
      description: "Um elegante Aston Martin prateado, Finn é um agente secreto britânico altamente treinado. Ele acredita que Mate seja um espião disfarçado e o envolve em uma missão perigosa, cheia de ação e espionagem.",
      imageUrl: "https://i.pinimg.com/736x/85/b6/06/85b606c6dc7bfe671596d010e8726c70.jpg"
    },
    {
      id: 10,
      title: "Cruz Ramirez (Carros 3)",
      description: "Uma carro de corrida amarelo, Cruz é uma treinadora experiente que ajuda McQueen a tentar voltar às pistas. Ela sonha em ser piloto, mas nunca teve oportunidade. Ao longo do filme, McQueen percebe seu potencial e a ajuda a realizar seu sonho.",
      imageUrl: "https://i.pinimg.com/736x/0a/6c/15/0a6c15dca26284e418c6948af9f13d3c.j"
    }

  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header similar ao Stack.Screen do React Native */}
      <div className="w-full bg-red-800 text-white p-4 mb-6">
        <h1 className="text-3xl font-bold text-center">Sobre</h1>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center">Meu Perfil</h1>
      
      {/* Container principal com flex */}
      <div className="container mx-auto px-4 py-8">
        {/* Grade responsiva para os cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map(card => (
            <div key={card.id} className="w-full mb-4">

             
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={card.imageUrl} className="w-full h-48 object-cover" alt={card.title} />
                <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">{card.title}</h5>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto w-full p-4 text-center text-gray-500">
        <p>Personalize esta página como quiser!</p>
      </div>
    </div>
  );
}