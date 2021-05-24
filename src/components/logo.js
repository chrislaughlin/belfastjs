import React from 'react';

import LogoImage from '../images/logo.jpeg'

const Logo = () => {
    return (
        <img 
            className="logo"
            src={LogoImage}
            alt="belfas js logo"
        />
    )
}

export default Logo;