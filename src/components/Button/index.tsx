import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, enabled }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={!enabled}>{title}</ButtonContainer>;
};

export default Button;
