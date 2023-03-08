import { InputHTMLAttributes, useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

import { Input } from './styles';

import { Container, Content } from '../styles';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

type Visibility = `text` | 'password';

const PasswordInput = ({
  title,
  label,
  error,
  onChange,
  value,
  ...props
}: PasswordInputProps): JSX.Element => {
  const [visibility, setVisibility] = useState<Visibility>(`password`);
  const [isFocused, setIsFocused] = useState(false);

  const handlePasswordInputVisibility = () => {
    setVisibility((prev) => (prev === `text` ? `password` : `text`));
  };
  return (
    <Container isFocused={isFocused} isErrored={!!error} isFilled={!!value}>
      <label htmlFor="">{label}</label>
      <Content>
        <div className="row">
          <Input
            type={visibility}
            title={title}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChange={onChange}
            {...props}
          />
          <button type="button" onClick={handlePasswordInputVisibility}>
            {visibility === `password` ? <IconEye /> : <IconEyeOff />}
          </button>
        </div>
        {error && <span>{error}</span>}
      </Content>
    </Container>
  );
};

export default PasswordInput;
