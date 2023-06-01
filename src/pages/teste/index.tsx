import React, { useCallback, useState } from "react";
import {
  FlexContainer,
  Container,
  Wrapper,
  ImageContainer,
} from "./teste.style";
import Image from "next/image";

export default function Teste() {
  const [listImages, setListImages] = useState<string[]>([]);
  const [carregado, setCarregado] = useState(false);

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

  const listImagesGenerate = useCallback(() => {
    let indice = imagens.length;

    while (indice) {
      // atenção para o pós-incremento indice--
      const indiceAleatorio = Math.floor(Math.random() * indice--);
      [imagens[indice], imagens[indiceAleatorio]] = [
        imagens[indiceAleatorio],
        imagens[indice],
      ];
    }
    setTimeout(() => {
      setCarregado(true);
      // console.log(imagens, ":imagens");
    }, 2000);
    // setCarregado(true);
    // setTimeout(() => {
    //   // setListImages(imagens);
    //   console.log(listImages, ":listImages");
    // }, 4000);
  }, [setListImages]);

  React.useEffect(() => {
    listImagesGenerate();
  }, []);

  React.useEffect(() => {
    setListImages(imagens);
    setTimeout(() => console.log(listImages, ":listaImagens"), 2000);
  }, [carregado]);

  const blocos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Container>
      <FlexContainer>
        {imagens.map((value, index) => {
          return <Imagem image={value} key={index}></Imagem>;
        })}
      </FlexContainer>
    </Container>
  );
}

const Imagem = (props: any) => {
  const [hidde, setHidde] = React.useState(true);
  const [src, setSrc] = React.useState("");
  const { image } = props;

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
  ];
  // console.log(image, ":image");

  const handleImage = React.useCallback(() => {
    const index = Math.floor(Math.random() * 10);
    setSrc(`/images/${imagens[index]}`);
  }, [setSrc]);
  React.useEffect(() => handleImage(), []);
  return (
    <Wrapper onClick={() => setHidde(!hidde)} ativo={hidde}>
      <ImageContainer ativo={hidde}>
        {image && (
          <Image
            src={`/images/${image}`}
            alt="Vercel Logo"
            width={80}
            height={80}
            priority
          />
        )}
      </ImageContainer>
    </Wrapper>
  );
};
