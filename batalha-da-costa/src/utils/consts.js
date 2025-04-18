import { images } from "@/assets/images/image-urls";

export const mockTournamentData = {
  chaves_batalha: {
    eliminatorias: [
      { mc_A: "MC AZAM", mc_B: "MC LAVOR", placar: "2-1", vencedor: "MC AZAM" },
      { mc_A: "MC KANYA", mc_B: "MC IVAN", placar: "0-3", vencedor: "MC IVAN" },
      {
        mc_A: "MC REVENANT",
        mc_B: "MC OKÁ",
        placar: "1-2",
        vencedor: "MC REVENANT",
      },
      {
        mc_A: "MC LEWANDUS",
        mc_B: "MC NACI",
        placar: "0-3",
        vencedor: "MC LEWANDUS",
      },
      {
        mc_A: "MC VENERADO",
        mc_B: "MC GIGANTE",
        placar: "2-1",
        vencedor: "MC VENERADO",
      },
      {
        mc_A: "MC ULAK",
        mc_B: "MC MAKAL",
        placar: "3-0",
        vencedor: "MC MAKAL",
      },
      {
        mc_A: "MC DEFENSOR",
        mc_B: "MC JUSTICEIRO",
        placar: "1-2",
        vencedor: "MC JUSTICEIRO",
      },
      {
        mc_A: "MC PARRADO",
        mc_B: "MC VINHETA",
        placar: "0-3",
        vencedor: "MC PARRADO",
      },
    ],
    quartas_de_final: [
      { mc_A: "MC AZAM", mc_B: "MC IVAN", placar: "2-1", vencedor: "MC AZAM" },
      {
        mc_A: "MC REVENANT",
        mc_B: "MC LEWANDUS",
        placar: "3-0",
        vencedor: "MC LEWANDUS",
      },
      {
        mc_A: "MC VENERADO",
        mc_B: "MC MAKAL",
        placar: "1-2",
        vencedor: "MC MAKAL",
      },
      {
        mc_A: "MC PARRADO",
        mc_B: "MC JUSTICEIRO",
        placar: "0-3",
        vencedor: "MC JUSTICEIRO",
      },
    ],
    semifinais: [
      {
        mc_A: "MC AZAM",
        mc_B: "MC LEWANDUS",
        placar: "2-1",
        vencedor: "MC AZAM",
      },
      {
        mc_A: "MC MAKAL",
        mc_B: "MC JUSTICEIRO",
        placar: "3-0",
        vencedor: "MC JUSTICEIRO",
      },
    ],
    final: [
      {
        mc_A: "MC AZAM",
        mc_B: "MC JUSTICEIRO",
        placar: "2-1",
        vencedor: "MC AZAM",
      },
    ],
  },
  data_edicao: "2023-10-02",
  num_edicao: "54",
};

export const mockRankingData = {
  data_ranking: new Date(),
  participantes: [
    {
      nome: "Perigo",
      pontos: "6",
      vitoria_2x0: "1",
    },
    {
      nome: "Exodia",
      pontos: "5",
      vitoria_2x0: "2",
    },
    {
      nome: "Brancão",
      pontos: "2",
      vitoria_2x0: "1",
    },
    {
      nome: "Fuze",
      pontos: "2",
      vitoria_2x0: "1",
    },
  ],
  temporada: {
    ano: "2025",
    periodo: "2",
  },
};

export const mockEditions = [
  "Edição 55 - 22/04/2023",
  "Edição 54 - 15/04/2023",
  "Edição 53 - 08/04/2023",
];

export const mockCarouselImages = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];

export const aboutContent = {
  welcomeImage: images.bdc_logo,
  welcomeDescription: `Seja bem-vindo à Batalha da Costa, um evento de rap que celebra a cultura, a arte do freestyle e o movimento do Hip Hop. Mestres de Cerimônias se reúnem aqui para mostrar suas habilidades, competir e se divertir. A Batalha da Costa é mais do que apenas uma competição; é uma comunidade vibrante onde a criatividade e a expressão são celebradas. A Batalha da Costa é um evento gratuito e aberto ao público, promovendo a inclusão e a diversidade na cultura do rap. Se você é um(a) MC, um(a) apreciador(a) da arte do freestyle ou da cultura Hip Hop, a Batalha da Costa é o lugar certo para você. Então o que está esperando para se juntar a nós e fazer parte dessa experiência única !? `,
  selectableItems: [
    {
      value: "default",
      label: "Selecione uma opção para saber mais",
      defaultDescription: "",
    },
    {
      value: "locations",
      label: "Localização",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1299.704625985362!2d-43.77763776409856!3d-22.872043054446646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1744397716347!5m2!1spt-PT!2sbr",
      description: `As edições da Batalha da Costa ocorrem no município de Itaguaí, no Calçadão localizado no centro do município. Costumam começar por volta das 19h e se estendem até às 23h. O calçadão é um espaço público, aberto e acessível a todos, onde os/as MC's se reúnem para batalhar e mostrar suas habilidades. A organização se concentra lá, junto dos/das MCs, aguardando a chegada da plateia e preparando a estrutura para iniciar o evento. Além do calçadão, a Batalha também pode ocorrer em outros pontos de referência, como a Praça Vicente Cicarino (em frente à agência do Banco do Brasil) e a Casa de Cultura (na entrada do Parque Municipal de Itaguaí).`,
    },
    {
      value: "mcs_home",
      label: "MC's da Batalha da Costa",
      image: images.mcs_image,
      alt: "MC's da Batalha da Costa",
      description: `Aqui vamos explorar o perfil dos atuais MC's da Batalha da Costa, ou como 'carinhosamente' gostamos de chamar os MC's da casa. Eles são os agentes culturais que representam a batalha, trazendo suas rimas e estilos únicos para o palco. Cada MC tem uma história, uma jornada e um talento que merece ser celebrado. Selecione um MC para saber mais sobre ele, suas batalhas e o impacto que ele tem na cena do rap local.`,
      mcs: [
        {
          name: "MC AZAM",
          image: images.bdc_logo,
          description: `MC AZAM é um dos MC's mais respeitados da Batalha da Costa. Com seu estilo único e rimas afiadas, ele conquistou o coração do público e se destacou nas batalhas. Sua trajetória é marcada por vitórias e uma paixão inabalável pela cultura do rap.`,
        },
        {
          name: "MC IVAN",
          image: images.bdc_logo,
          description: `MC IVAN é conhecido por sua habilidade em improvisação e suas letras impactantes. Ele é um verdadeiro artista que traz emoção e autenticidade para cada batalha.`,
        },
        // Aguardando mais informações sobre os MC's
      ]
    },
    {
      value: "organizers",
      label: "Organização",
      image: images.organization_image,
      alt: "Organização",
      description: `Por trás de cada batalha de rap de sucesso, há uma equipe dedicada de
    organizadores que trabalham incansavelmente para trazer esse evento à vida.
    Conheça os indivíduos apaixonados que curam as batalhas, gerenciam a
    logística e promovem a vibrante comunidade em torno da Batalha da Costa.`,
      organizers: [
        {
          name: "Ana Luiza",
          image: images.bdc_logo,
          description: `Ana Luiza, é uma das organizadoras da Batalha da Costa.`,
        },
        {
          name: "Maria 'Rosinha' Rosa",
          image: images.bdc_logo,
          description: `Rosinha assim como Ana Luiza, faz parte da organização da Batalha da Costa.`,
        },
        {
          name: "Gabriel 'GBZ' Martins",
          image: images.bdc_logo,
          description: `Guilherme, também conhecido como Gui, é um dos organizadores da Batalha da Costa.`,
        },
        // Aguardando mais informações sobre os organizadores
      ],
    },
  ],
}