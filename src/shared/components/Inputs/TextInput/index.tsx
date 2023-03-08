import { InputHTMLAttributes, useState } from 'react';

import { Input } from './styles';
import { Container, Content } from '../styles';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextInput = ({
  label,
  type,
  title,
  onChange,
  value,
  error,
  ...props
}: TextInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isErrored={!!error} isFilled={!!value}>
      <label htmlFor="">{label}</label>
      <Content>
        <Input
          title={title}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          value={value}
        />
        {error && <span>{error}</span>}
      </Content>
    </Container>
  );
};

export default TextInput;
