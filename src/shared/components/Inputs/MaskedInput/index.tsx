import { useState } from 'react';
import { Props } from 'react-input-mask';
import { Container, Input } from './styles';

type MaskedInputProps = Props & {
  error?: string;
};

const MaskedInput = ({
  title,
  error,
  onChange,
  value,
  ...props
}: MaskedInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isErrored={!!error} isFilled={!!value}>
      <Input
        title={title}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default MaskedInput;
