import styled from 'styled-components';

type PropsHero = {
  urlImage?: string;
};

export const DivButtonInfo = styled.button`
  color: #fff;
  align-items: center;
  background-color: var(--color-button-info);
  border: none;
  cursor: pointer;
  display: flex;
  font-family: 'Roboto';
  font-size: 0.8rem;
  font-weight: 700;
  gap: 0.5rem;
  height: 1rem;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  top: 50%;
  transition: all 0.3s ease-in-out;
  width: 80%;

  opacity: 0;
  pointer-events: none;

  &:hover {
    background-color: var(--color-button-info-hover);
  }
`;

export const DivInfo = styled.div<PropsHero>`
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    ${DivButtonInfo} {
      opacity: 1;
      pointer-events: all;
    }
  }

  & img {
    cursor: pointer;
    width: 14.5rem;
    transition: all 0.3s ease-in-out;
  }

  & > img:hover {
    opacity: 0.5;
    transform: scale(1.1);
  }
`;
