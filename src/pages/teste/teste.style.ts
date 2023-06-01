import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section<{ ativo: boolean }>`
  height: 6rem;
  width: 6rem;
  background: ${(props) => (props.ativo ? "grey" : "blueviolet")};
  font-size: 0;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgb(46 61 73 / 50%);
  @media (max-width: 464px) {
    margin-bottom: 1.5rem;
  }
`;

export const ImageContainer = styled.div<{ ativo: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.ativo ? 0 : 1)};
  transition: 0.5s;
`;
export const Container = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexContainer = styled.div`
  width: 28rem;
  min-height: 30rem;
  background: linear-gradient(160deg, purple 30%, yellow 100%);
  padding: 32px;
  border-radius: 10px;
  box-shadow: 12px 15px 20px 0 rgb(46 61 73 / 50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3em;
`;
// export const GridContainer = styled.div`
//   margin: 0;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-auto-rows: 8rem;
//   grid-column-gap: 1rem;
//   grid-row-gap: 1rem;
//   background: white;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 820px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 560px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;
