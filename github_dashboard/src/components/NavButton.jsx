import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.scss';
import Button from '@mui/material/Button';


function NavButton({ title, path, showButton }) {
    const nav = useNavigate();
    const handleRedirect = () => nav(path)

    return (
        Object.keys(showButton).length ? <div className='nav_button' >
            <Button variant="contained" onClick={handleRedirect} disableElevation>
                {title}
            </Button>

        </div>
            : null
    );
}

export default NavButton;