export type CardType = {
  id: number;
  clickable: boolean;
  showed: boolean;
  src: string;
};

const imagens: string[] = [
  "angularjs.png",
  "css3.png",
  "vue-js.png",
  "stack-overflow.png",
  "raspberry-pi.png",
  "python.png",
  "nodejs.png",
  "mongodb.png",
  "html5.png",
  "github.png",
  "angularjs.png",
  "css3.png",
  "vue-js.png",
  "stack-overflow.png",
  "raspberry-pi.png",
  "python.png",
  "nodejs.png",
  "mongodb.png",
  "html5.png",
  "github.png",
];

export const CreateArrayImage = () =>
  imagens.map((v, i): CardType => {
    return {
      id: i,
      clickable: true,
      showed: false,
      src: `/images/${v}`,
    };
  });

export const Shuffle = (arr: CardType[]): CardType[] => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};
