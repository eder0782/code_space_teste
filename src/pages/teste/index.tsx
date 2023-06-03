import React, { useCallback, useEffect, useState } from "react";
import { CreateArrayImage, Shuffle, CardType } from "@/utils/create";

import {
  FlexContainer,
  Container,
  Wrapper,
  ImageContainer,
  Button,
} from "./teste.style";
import Image from "next/image";
import { type } from "os";

export default function Teste() {
  const [listImages, setListImages] = useState<CardType[]>(
    []
  );
  const [selected, setSelected] = useState<undefined | CardType>(undefined);
  const [gameFinish, setGameFinish] = useState(false);
  const [countHit, setCountHit] = useState(0);
 
  useEffect(()=>{setListImages(Shuffle(CreateArrayImage()))},[])
  const handleClick = (currentCard: CardType) => {
    setListImages((prev) =>
      prev.map((card) =>
        card.id === currentCard.id
          ? { ...card, clickable: false, showed: true }
          : card
      )
    );

    if (!selected) {
      setSelected(currentCard);
      return;
    }

    if (currentCard.src === selected.src) {
      
      setSelected(undefined);
    } else {
    
      setTimeout(()=>{ setListImages((prev) =>
        prev.map((card) =>
          card.id === currentCard.id || selected.id === card.id
            ? { ...card, clickable: true, showed: false }
            : card
        )
      );},1000)
     
      setSelected(undefined);
    }
  };

  const Reset = () => {
    window.location.reload();
  };
  return (
    <Container>
      <Button onClick={Reset}>RESET</Button>
      <FlexContainer>
        {listImages.length > 0 ? (
          listImages.map((value, index) => {
            return (
              <Imagem card={value} func={handleClick} key={index}></Imagem>
            );
          })
        ) : (
          <></>
        )}
      </FlexContainer>
    </Container>
  );
}

type PropsIMG = {
  card: CardType;
  func: (card: CardType) => void;
};
const Imagem: React.FC<PropsIMG> = ({ card, func }) => {
  
  const handleClick = () => {
    if (card.clickable) {
      func(card);
    
    }
  };

  return (
    <Wrapper onClick={() => handleClick()} ativo={!card.showed}>
      <ImageContainer ativo={!card.showed}>
        {card.src && (
          <Image
            src={card.src}
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
