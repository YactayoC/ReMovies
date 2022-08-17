import styled from 'styled-components';

type PropsButton = {
  fontSize?: string;
  borderRadius?: boolean;
  center?: boolean;
  displayFlex?: boolean;
  width?: string;
};

export const Button = styled.button<PropsButton>`
  align-items: center;
  background-color: var(--color-button);
  border-radius: ${(props) => (props.borderRadius ? '5px' : 'none')};
  border: none;
  color: #fff;
  cursor: pointer;
  display: ${(props) => props.displayFlex && 'flex'};
  font-family: 'Roboto';
  font-size: ${(props) => props.fontSize};
  gap: 0.5rem;
  margin: ${(props) => props.center && '0 auto'};
  padding: 8px 30px;
  transition: background-color 0.3s ease-in-out;
  width: ${(props) => props.width && props.width};

  & p {
    font-size: ${(props) => props.fontSize};
  }

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export const ButtonSubmit = styled(Button).attrs({ type: 'submit' })<PropsButton>``;
export const ButtonInfo = styled(Button)<PropsButton>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: var(--color-button-info);
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: var(--color-button-info-hover);
  }
`;

export const ButtonInfoMovie = styled(Button)<PropsButton>`
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: var(--color-button-info);
  font-weight: 700;
  font-size: 0.8rem;
  top: 50%;
  width: 80%;
  height: 1rem;
  padding: 1rem 1rem;
  
  opacity: 0;
  pointer-events: none;

  &:hover {
    background-color: var(--color-button-info-hover);
  }
`;
