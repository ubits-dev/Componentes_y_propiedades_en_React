import React from 'react';

const Navbar = (props) => {
    return (
        <>
            <h2>{props.info.nombre}</h2>
            <h3>{props.info.slogan}</h3>
        </>
    )
}

export default Navbar;