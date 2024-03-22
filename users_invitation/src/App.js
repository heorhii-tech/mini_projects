import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import service from './service/users.js'
import { Skeleton } from './components/Users/Skeleton';



function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const users = await service.get();
        setUsers(users.data);
      } catch (err) {
        console.log(err);
      }
    })()


  }, []);
  useEffect(() => {
    users.length && setIsLoading(false)
  }, [users]);

  const onchangeSearchValue = (e) => {
    setSearchValue(e.target.value);

  };
  const onClickInvates = (id) => {
    invites.includes(id) ?
      setInvites(prev => prev.filter(item => item !== id))
      : setInvites(prev => [...prev, id])
  };
  const changeShowSuccess = () => {
    setShowSuccess(true)

  }


  return (
    <div className="App">


      {showSuccess ?
        <Success
          invites={invites}
        />
        : <Users
          changeShowSuccess={changeShowSuccess}
          invites={invites}
          onClickInvates={onClickInvates}
          searchValue={searchValue}
          onchangeSearchValue={onchangeSearchValue}
          items={users}
          isLoading={isLoading} />}
    </div>
  );
}

export default App;
