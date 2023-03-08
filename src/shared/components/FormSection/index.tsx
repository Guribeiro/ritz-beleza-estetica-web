import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  > span {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    display: block;
  }
`;

interface FormSectionProps {
  label?: string;
  children: ReactNode;
}

const FormSection = ({ label, children }: FormSectionProps): JSX.Element => {
  return (
    <Container>
      <span>{label}</span>
      {children}
    </Container>
  );
};

export default FormSection;
