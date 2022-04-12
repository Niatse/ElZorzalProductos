import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import styles from '../styles.module.css'

const Nav = styled.nav`

  
`

const Navbar = () => {
  return (
    <Nav className={styles.nav}>
      <div id={styles.brand}>
       El Zorzal
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar