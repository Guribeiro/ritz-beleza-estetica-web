import { ButtonHTMLAttributes } from 'react';
import { IconFidgetSpinner } from '@tabler/icons-react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  loading?: boolean;
}

const Button = ({ children, loading, ...props }: ButtonProps): JSX.Element => {
  return (
    <Container {...props}>
      {loading ? <IconFidgetSpinner size={16} /> : children}
    </Container>
  );
};

export default Button;
