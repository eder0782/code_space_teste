import React, { useCallback, useState } from "react";

import {
  FlexContainer,
  Container,
  Wrapper,
  ImageContainer,
  Button,
} from "./teste.style";
import Image from "next/image";

export default function Teste() {
  const [listImages, setListImages] = useState<string[]>([]);

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

    const shufle = new Promise<any>((resolve) => {
      while (indice) {
        // atenção para o pós-incremento indice--
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [imagens[indice], imagens[indiceAleatorio]] = [
          imagens[indiceAleatorio],
          imagens[indice],
        ];
      }

      if (indice <= 0) {
        return resolve(true);
      }
      ///
    });

    const exec = async () => {
      await shufle
        .then(() => setListImages(imagens))
        .catch((e) => console.log(e, ":error"));
    };

    exec();
  }, [setListImages]);

  React.useEffect(() => {
    listImagesGenerate();
  }, []);

  return (
    <Container>
      <Button>RESET</Button>
      <FlexContainer>
        {listImages.length > 0 ? (
          listImages.map((value, index) => {
            return <Imagem image={value} key={index}></Imagem>;
          })
        ) : (
          <></>
        )}
      </FlexContainer>
    </Container>
  );
}

const Imagem = (props: any) => {
  const [hidde, setHidde] = React.useState(true);
  const { image } = props;

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
