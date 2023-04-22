import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SkeletonLoader from 'components/skeleton/skeleton';
import UserCard from 'components/userCard/userCard';
import LoadMore from 'components/buttonLoadMore/loadMore';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B2A99',
    },
  },
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [isFollowing, setISFollowing] = useState(false);

  const handlePageChange = () => {
    setPage(page + 1);
  };

  // const handleFollowing = value => {
  //   setISFollowing(value);
  //   setUsers([]);
  //   console.log(value);
  // };

  useEffect(() => {
    axios.defaults.baseURL = `https://6443d73190738aa7c078cc6d.mockapi.io`;
    axios
      .get(`/users?page=${page}&limit=3`)
      .then(response => {
        setIsLoading(true);
        setUsers(prevArray => [].concat(prevArray, response.data));
      })
      .catch(function (error) {
        throw new Error(error);
      })
      .finally(setIsLoading(false));
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        users.map(user => {
          return (
            <UserCard
              key={user.id}
              id={user.id}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
              user={user.user}
              // onFollow={handleFollowing}
              // isFollowing={isFollowing}
            />
          );
        })
      ) : (
        <SkeletonLoader />
      )}

      <LoadMore onLoadMore={handlePageChange} />
    </ThemeProvider>
  );
}
