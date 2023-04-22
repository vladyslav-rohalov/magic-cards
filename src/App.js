import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from 'components/userCard/userCard';
import LoadMore from 'components/buttonLoadMore/loadMore';

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page + 1);
    console.log(users);
  };

  useEffect(() => {
    axios.defaults.baseURL = `https://6443d73190738aa7c078cc6d.mockapi.io/users?page=${page}&limit=3`;
    axios
      .get()
      .then(response => {
        setUsers(prevArray => [].concat(prevArray, response.data));
      })
      .catch(function (error) {
        throw new Error(error);
      });
  }, [page]);

  return (
    <div>
      {users.length > 0 &&
        users.map(item => {
          return (
            <UserCard
              key={item.id}
              tweets={item.tweets}
              followers={item.followers}
              avatar={item.avatar}
              user={item.user}
            />
          );
        })}
      <LoadMore onLoadMore={handlePageChange} />
    </div>
  );
}
