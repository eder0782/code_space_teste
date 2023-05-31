import React from "react";
import {
  Title,
  FlexContainer,
  Container,
  Wrapper,
  GridContainer,
} from "./teste.style";
import Image from "next/image";

export default function Teste() {
  const blocos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Container>
      <FlexContainer>
        {blocos.map((value, index) => {
          return <Imagem key={index}></Imagem>;
        })}
      </FlexContainer>
    </Container>
  );
}

const Imagem = () => {
  const [hidde, setHidde] = React.useState(true);
  const [src, setSrc] = React.useState("");
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

  const handleImage = React.useCallback(() => {
    const index = Math.floor(Math.random() * 10);
    setSrc(`/images/${imagens[index]}`);
  }, [setSrc]);
  React.useEffect(() => handleImage(), []);
  return (
    <Wrapper onClick={() => setHidde(!hidde)} ativo={hidde}>
      <Image
        src={src}
        alt="Vercel Logo"
        width={80}
        height={80}
        hidden={hidde}
        priority
      />
    </Wrapper>
  );
};
