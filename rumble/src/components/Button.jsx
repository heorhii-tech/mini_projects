import React from 'react';
import './../../src/styles.scss';

function Button({ fun, title, showButton }) {

    return (

        showButton && <button onClick={fun}> {title}</button>



    );
}

export default Button;