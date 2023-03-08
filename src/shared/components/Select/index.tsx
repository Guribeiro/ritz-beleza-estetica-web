import { SelectHTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.silver};
  /* margin-bottom: 0.2rem; */
  padding: 0.4rem 0;
  font-family: 'Playfair Display', serif;
`;

const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  border: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.night};
  background-color: ${({ theme }) => theme.colors.anti_flash};

  width: 100%;
  padding: 1.6rem;
`;

import { Fieldset } from '../Inputs/styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

const Select = ({
  id,
  title,
  onChange,
  value,
  error,
  ...props
}: SelectProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Fieldset
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={!!value && value !== `none`}
    >
      <SelectInput
        id={id}
        title={title}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error && <span>{error}</span>}
    </Fieldset>
  );
};

export default Select;
