import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useTheme } from '@/hooks/theme';

import MenuButton from './components/MenuButton';

import { Container } from './styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type DropdownState = 'opened' | 'closed';

const Header = (): JSX.Element => {
  const { position } = useScrollPosition();
  const { theme } = useTheme();
  const [dropdownVisibility, setDropdownVisibility] =
    useState<DropdownState>(`closed`);

  const headerRef = useRef<HTMLHeadingElement>(null);
  const headerSectionRef = useRef<HTMLElement>(null);

  const handleDropdownVisibility = () => {
    setDropdownVisibility((prev) => (prev === `opened` ? `closed` : `opened`));
  };

  const handleCloseDropdown = () => {
    setDropdownVisibility(`closed`);
  };

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transition = `200ms`;
      headerRef.current.style.boxShadow =
        position > 0 ? `0 4px 30px rgba(0, 0, 0, 0.1)` : `none`;
    }
  }, [position]);

  useEffect(() => {
    if (headerSectionRef.current) {
      if (position > 0) {
        headerSectionRef.current.style.border = `none`;
      } else {
        headerSectionRef.current.style.borderBottomWidth = `1px`;
        headerSectionRef.current.style.borderBottomStyle = `solid`;
        headerSectionRef.current.style.borderBottomColor =
          theme.colors.platinum;

        headerSectionRef.current.style.boxShadow = `none`;
      }
    }
  }, [position]);

  return (
    <Container ref={headerRef}>
      <article className={`${dropdownVisibility}`}>
        <ul>
          <li>
            <AnchorLink onClick={handleCloseDropdown} href="#welcome">
              Sobre
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              onClick={handleCloseDropdown}
              offset={() => -50}
              href="#services"
            >
              Serviços
            </AnchorLink>
          </li>
          <li>
            <AnchorLink onClick={handleCloseDropdown} href="#team">
              Equipe
            </AnchorLink>
          </li>
        </ul>
      </article>
      <section ref={headerSectionRef}>
        <h3>RITZ</h3>
        <MenuButton
          visibility={dropdownVisibility}
          onClick={handleDropdownVisibility}
        />
      </section>
    </Container>
  );
};

export default Header;
