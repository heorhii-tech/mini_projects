import React from 'react';

function ActionButton({ title, showButton, fun }) {

    return (
        showButton && <button onClick={fun}>{title}</button>
    );
}

export default ActionButton;