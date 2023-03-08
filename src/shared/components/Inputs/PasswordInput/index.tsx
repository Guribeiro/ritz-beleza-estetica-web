import { InputHTMLAttributes, useState, MouseEvent } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

import {} from 'react';

import { Container, Input } from './styles';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

type Visibility = `text` | 'password';

const PasswordInput = ({
  title,
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
    </Container>
  );
};

export default PasswordInput;
