import React from 'react'

export const funcionExtra = () => {}

export const variableExtra = '';

const Navbar = (props) => {
  return (
    <>
      <h1>Mi Componente</h1>
      <p>{props.miVariable}</p>
    </>
  )
}
export default Navbar

