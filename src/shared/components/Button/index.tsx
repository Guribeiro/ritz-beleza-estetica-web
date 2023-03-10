import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconFidgetSpinner } from '@tabler/icons-react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

const Button = ({ children, loading, ...props }: ButtonProps): JSX.Element => {
  return (
    <Container {...props} loading={!!loading}>
      {loading ? <IconFidgetSpinner size={20} /> : children}
    </Container>
  );
};

export default Button;
