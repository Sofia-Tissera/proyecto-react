import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <>
        <NavContainer>
            <h2>Tienda de <span>Remeras</span></h2>
            <div>
              <a href="/">Home</a>
              <a href="/">Shop</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Gallery</a>
            </div>
        </NavContainer>
    </>
  )
}

export default Navbar 

const NavContainer = styled.nav`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  }
h2 {
  color: white;
  font-weight: 400;
  margin-left: 1rem;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #836C73;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 2rem;
}

`