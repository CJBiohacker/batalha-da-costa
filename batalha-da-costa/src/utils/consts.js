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
  welcomealt: "Rap Battle Event",
  welcomeDescription: `Welcome to the electrifying world of [Your Rap Battle Event Name]!
  Prepare for intense lyrical showdowns, showcasing the raw talent and
  creative wordplay of MCs from all walks of life. Our event is more
  than just a competition; it's a vibrant celebration of hip-hop culture,
  community, and the power of spoken word. Join us as we witness history
  in the making, one rhyme at a time.`,
  complementaryDescription: `[Expand on the history, mission, or values of your Rap Battle event here.
  You might want to include information about past events, the organizers'
  vision, or how the event contributes to the local community. Highlight
  what makes your Rap Battle unique and engaging for both participants
  and spectators.]`,
  selectableItems: [
    {
      value: "rap-battle",
      label: "Selecione uma opção para saber mais",
      defaultDescription: "",
    },
    {
      value: "locations",
      label: "Our Locations",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1299.704625985362!2d-43.77763776409856!3d-22.872043054446646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1744397716347!5m2!1spt-PT!2sbr",
      description: `Explore the diverse and exciting venues that host our Rap Battles.
      From intimate local spots to larger event spaces, each location brings
      its own unique atmosphere to the competition. [Provide details about
      the types of locations you use, their significance, or any interesting
      facts.]`,
    },
    {
      value: "mcs",
      label: "Featured MCs",
      image: images.bdc_logo,
      alt: "Featured MC",
      description: `Meet some of the incredibly talented MCs who have graced our stage.
    These lyrical warriors bring their unique styles, stories, and flows
    to the battle, captivating audiences with their skill and passion.
    [You could potentially link to individual MC profiles or provide brief
    biographies here.]`,
    },
    {
      value: "organizers",
      label: "The Organizers",
      image: images.bdc_logo,
      alt: "Organizer",
      description: `Behind every successful Rap Battle is a dedicated team of organizers
    who work tirelessly to bring this event to life. Learn more about the
    passionate individuals who curate the battles, manage the logistics,
    and foster the vibrant community surrounding [Your Rap Battle Event Name].`,
    },
  ],
}