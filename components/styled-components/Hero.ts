import styled, { keyframes } from 'styled-components';

type PropsHero = {
  urlImage?: string;
};

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
export const Hero = styled.div<PropsHero>`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0, transparent 60%, rgba(0, 0, 0, 0.8)),
    url(${(props) => (props.urlImage !== "" ? props.urlImage : 'https://i.ytimg.com/vi/grZFgo72S-I/maxresdefault.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 35rem;
  width: 100%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    background-position: center;
  }
`;

export const HeroSelected = styled(Hero)<PropsHero>``;
