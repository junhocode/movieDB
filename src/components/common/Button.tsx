import styled from 'styled-components'

interface ButtonProps {
    onClick : () => void;
    children : React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
      <ButtonStyle onClick={onClick}>
        {children}
      </ButtonStyle>
    );
  };

const ButtonStyle = styled.button`
    color : "lightgrey",
    text : "black",
    fontSize : "1rem",
    padding : "0.5rem 1rem"
`

export default Button;