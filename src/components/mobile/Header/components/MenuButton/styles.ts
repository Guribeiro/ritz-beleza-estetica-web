import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2rem;
  transition: 300ms;
`;

export const Bar = styled.div`
  width: 2.4rem;
  padding: 0.16rem;
  background: ${({ theme }) => theme.colors.carrot_orange};

  transition: 300ms;

  &.top-bar {
    transform: rotate(45deg) translate(6px, 8px);
  }

  &.middle-bar {
    opacity: 0;
  }

  &.bottom-bar {
    transform: rotate(-45deg) translate(2px, -4px);
  }

  & + div {
    margin-top: 0.4rem;
  }
`;
