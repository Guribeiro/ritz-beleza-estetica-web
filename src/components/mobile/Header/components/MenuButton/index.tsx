import { ButtonHTMLAttributes } from 'react';
import { Container, Bar } from './styles';

type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  visibility: 'opened' | 'closed';
};

const MenuButton = ({ visibility, ...props }: MenuButtonProps): JSX.Element => {
  return (
    <Container {...props}>
      <Bar className={visibility === `opened` ? `top-bar` : ``} />
      <Bar className={visibility === `opened` ? `middle-bar` : ``} />
      <Bar className={visibility === `opened` ? `bottom-bar` : ``} />
    </Container>
  );
};

export default MenuButton;
