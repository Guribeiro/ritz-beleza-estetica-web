import { useState } from 'react';
import { Props } from 'react-input-mask';
import { Input } from './styles';
import { Container, Content } from '../styles';

type MaskedInputProps = Props & {
  label?: string;
  error?: string;
};

const MaskedInput = ({
  title,
  label,
  error,
  onChange,
  value,
  ...props
}: MaskedInputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} isErrored={!!error} isFilled={!!value}>
      <label htmlFor="">{label}</label>
      <Content>
        <Input
          title={title}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={onChange}
          {...props}
        />
        {error && <span>{error}</span>}
      </Content>
    </Container>
  );
};

export default MaskedInput;
