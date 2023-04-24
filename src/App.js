import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import { getUsers, updateUser } from 'utils/apiUsers';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Container } from '@mui/material';
import LoadMore from 'components/buttonLoadMore/loadMore';
import UserList from 'components/userList/userList';
import TopBar from 'components/topBar/topBar';
import HeaderBar from 'components/headerBar/headerBar';

export default function App() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [followings, setFollowings] = useLocalStorage('followings', []);
  const [filter, setFilter] = useLocalStorage('filter', ['Show all']);
  const [showLimit, setShowLimit] = useState(9);
  const [totalMatches, setTotalMatches] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(prevPage => prevPage + 1);
    setShowLimit(prevLimit => prevLimit + 9);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const users = await getUsers(page);
      setUsers(prevUsers => {
        const newUser = users.map(user => {
          if (followings.includes(user.id)) {
            return { ...user, isFollowing: true };
          }
          return { ...user, isFollowing: false };
        });
        //переписать этот код
        const isTwin = (a, b) => a.id === b.id;

        const compareArr = (arrA, arrB, compareFunction) =>
          arrA.filter(
            arrAValue =>
              !arrB.some(arrBValue => compareFunction(arrAValue, arrBValue))
          );

        const compareUsers = compareArr(prevUsers, users, isTwin);

        return [...compareUsers, ...newUser];
      });

      setIsLoading(false);
    };

    fetchUsers();
  }, [page]);

  const handleFollowing = async id => {
    setFollowings(prevFollowings => {
      const index = prevFollowings.indexOf(id);

      setUsers(prevUsers =>
        prevUsers.map(user => {
          if (user.id === id) {
            user.isFollowing = !user.isFollowing;
            user.followers = user.isFollowing
              ? user.followers + 1
              : user.followers - 1;
          }
          return user;
        })
      );

      if (index === -1) {
        return [...prevFollowings, id];
      } else {
        prevFollowings.splice(index, 1);
        return [...prevFollowings];
      }
    });

    const [user] = users.filter(user => user.id === id);
    updateUser(id, user.followers);
  };

  const handleFilter = filterValue => {
    setFilter(filterValue);
    setPage(1);
    setShowLimit(9);
    if (filterValue === 'Show all') setTotalMatches(100);
    if (filterValue === 'Follow') setTotalMatches(100 - followings.length);
    if (filterValue === 'Followings') setTotalMatches(followings.length);
  };

  const filtredUsers = users
    .filter(user => {
      if (filter === 'Show all') return users;
      if (filter === 'Follow') return !user.isFollowing;
      if (filter === 'Followings') return user.isFollowing;
    })
    .sort((a, b) => b.followers - a.followers)
    .splice(0, showLimit);

  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Container maxWidth="xl">
        <TopBar onFilterChange={handleFilter} />
        {users && (
          <UserList
            users={filtredUsers}
            isLoading={isLoading}
            onClick={handleFollowing}
          />
        )}
        {totalMatches > showLimit && <LoadMore onLoadMore={handlePageChange} />}
      </Container>
    </ThemeProvider>
  );
}
