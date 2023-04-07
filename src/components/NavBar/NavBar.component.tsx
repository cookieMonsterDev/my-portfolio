import React, { useEffect, useState, useRef } from "react";
import { Container, Navbar, TabLink, Logo } from "./NavBar.styled";
import { NavBarProps } from "./NavBar.types";
import Link from "next/link";
import { isBrowser } from "@utils/helpers";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabs, logo }) => {
  const prevScrollpos = useRef(isBrowser() ? window.screenY : 0);
  const [show, setShow] = useState(true);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  });

  return (
    <Container show={show}>
      <Link href="/">
        <Logo>{logo}</Logo>
      </Link>
      <Navbar>
        {tabs.map(({ name, href, content, ...rest }, i) => (
          <TabLink key={name} href={href} item={Boolean(content)} delay={i} {...rest}>
            {content || name}
          </TabLink>
        ))}
      </Navbar>
    </Container>
  );
};
