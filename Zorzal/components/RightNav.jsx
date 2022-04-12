import React from 'react';
import styled from 'styled-components';
import styles from '../styles.module.css'

const Ul = styled.ul`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:8;

  li {
    padding: 10px 10px;
    font-size:1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
 
 li a{
  text-decoration: none;
  color white


 }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgb(29, 31, 29);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 50;
    right: 0;
    height: auto;
    width: 100%;
    margin-top:0px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul  open={open}>
     
      <li><a href='#home'>Inicio</a></li>
      <li><a href='#productos'>Productos</a></li>
      <li><a href='#Acerca de'>Acerca de</a></li>
     
    </Ul>
  )
}

export default RightNav