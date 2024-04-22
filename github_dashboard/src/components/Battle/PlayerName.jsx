import React from 'react';
import { useDispatch } from 'react-redux';
import '../../styles.scss'


function PLayerName({ title, fetchPlayerInfo, setPlayerName, notExist }) {

    const dispatch = useDispatch()
    const handleChangeName = (e) => {

        dispatch(setPlayerName(e.target.value))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPlayerInfo()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="player_name">Choose {title} username</label>
            <input
                id='player_name'
                type='text '
                onChange={handleChangeName}
                required

            />
            <button>Submit</button>
            {notExist && <h4>{notExist}</h4>}
        </form>




    );
}

export default PLayerName;