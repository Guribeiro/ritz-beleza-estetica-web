import { InputHTMLAttributes, useState } from 'react';

import { Container, Input } from './styles';

import { Fieldset } from '../styles';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const TextInput = ({
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
      <Input
        title={title}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default TextInput;
