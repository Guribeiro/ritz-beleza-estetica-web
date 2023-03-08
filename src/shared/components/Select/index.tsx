import { SelectHTMLAttributes, useState } from 'react';

import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
  isFilled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding-top: 2rem;

  > label {
    position: absolute;
    font-size: 1rem;
    top: 0;
    display: inline-block;
    color: ${({ theme }) => theme.colors.night};
    font-weight: 600;
    text-transform: uppercase;

    ${({ isErrored, theme }) =>
      isErrored &&
      css`
        color: ${theme.colors.red};
      `}

    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        color: ${theme.colors.carrot_orange};
      `}


  ${({ isFilled, isErrored, theme }) =>
      isFilled &&
      !isErrored &&
      css`
        color: ${theme.colors.carrot_orange};
      `}
  }

  > fieldset {
    border: 1px solid ${({ theme }) => theme.colors.platinum};

    border-radius: 0.8rem;
    overflow: hidden;

    ${({ isErrored, theme }) =>
      isErrored &&
      css`
        border-color: ${theme.colors.red};
      `}

    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        border-color: ${theme.colors.carrot_orange};
      `}


  ${({ isFilled, isErrored, theme }) =>
      isFilled &&
      !isErrored &&
      css`
        border-color: ${theme.colors.carrot_orange};
      `}
  }
`;

export const Content = styled.fieldset`
  > span {
    color: red;
    font-size: 1.2rem;
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
  }

  & + fieldset {
    margin-top: 0.8rem;
  }
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

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
};

const Select = ({
  id,
  title,
  label,
  onChange,
  value,
  error,
  ...props
}: SelectProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container
      isFocused={isFocused}
      isErrored={!!error}
      isFilled={!!value && value !== `none`}
    >
      <label htmlFor="">{label}</label>
      <Content>
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
      </Content>
    </Container>
  );
};

export default Select;
