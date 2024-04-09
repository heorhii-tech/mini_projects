
import React, { useMemo } from 'react';
import users from '../constants/gitHubUsers';


function PlayerName({ playerName, title, setPlayerName, handleGetInfo, err, disabledPlayer }) {

    const filteredUsers = useMemo(() => {
        return JSON.parse(JSON.stringify(users)).map((item) => {
            Object.keys(disabledPlayer).length && item.name === disabledPlayer ? item.disabled = true : null;

            return item;
        })
    }, [users, disabledPlayer]);



    const handleSetName = e => {
        setPlayerName(e.target.value);
    };
    const handleSetNameSelect = (e) => {

        setPlayerName(e.target.value);
    };

    return (
        <form onSubmit={handleGetInfo}>
            <label >
                Choose Player {title} username:
            </label>
            {filteredUsers.length &&
                <select onChange={handleSetNameSelect}>
                    <option value={''}>Select user </option>

                    {filteredUsers.map((item, index) => {
                        return <option
                            key={index}
                            value={item.name}
                            disabled={item.disabled}
                        >{item.name}
                        </option>
                    })}

                </select>
            }
            <label htmlFor='inputUser'>or fill user name</label>
            <input
                id='inputUser'
                type='text'
                value={playerName}
                placeholder={playerName}
                onChange={handleSetName} required
            >

            </input>
            {err && <h4>{err}</h4>}
            <button >Submit</button>

        </form>
    );
}

export default (PlayerName);
