import React from 'react';
import Repository from '../components/Repository';
import NavButton from '../components/NavButton';
import { useSelector } from 'react-redux';

function RepositoryRout(props) {
    const { repository } = useSelector((state) => state.repository)
    return (
        <>
            <Repository />
            <NavButton title={'Back to Home'} path={'/'} showButton={repository} />
        </>
    );
}

export default RepositoryRout;