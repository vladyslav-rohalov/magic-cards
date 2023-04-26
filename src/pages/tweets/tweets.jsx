import { useState, useEffect } from 'react';
import { getUsers, updateUser } from '../../utils/apiUsers';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { isTwin, compareArr } from 'utils/compareArr';
import LoadMore from 'components/buttonLoadMore/loadMore';
import UserList from 'components/userList/userList';
import TopBar from 'components/topBar/topBar';
import TopButton from 'components/topButton/topButton';

export default function Tweets() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [followings, setFollowings] = useLocalStorage('followings', []);
  const [filter, setFilter] = useLocalStorage('filter', ['Show all']);
  const [showLimit, setShowLimit] = useState(9);
  const [totalMatches, setTotalMatches] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageScroll, setPageScroll] = useState(false);

  const handlePageChange = () => {
    setPage(prevPage => prevPage + 1);
    setShowLimit(prevLimit => prevLimit + 9);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const fetchedUsers = await getUsers(page);
      setUsers(prevUsers => {
        const newUsers = fetchedUsers.map(user => {
          if (followings.includes(user.id)) {
            return { ...user, isFollowing: true };
          }
          return { ...user, isFollowing: false };
        });

        const compareUsers = compareArr(prevUsers, fetchedUsers, isTwin);

        return [...compareUsers, ...newUsers];
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

    const user = users.filter(user => user.id === id);
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
      if (filter === 'Follow') return !user.isFollowing;
      if (filter === 'Followings') return user.isFollowing;
      return users;
    })
    .sort((a, b) => b.followers - a.followers)
    .splice(0, showLimit);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setPageScroll(true) : setPageScroll(false);
    });
  }, []);

  return (
    <>
      <TopBar onFilterChange={handleFilter} />
      {users.length > 0 && (
        <UserList
          users={filtredUsers}
          isLoading={isLoading}
          onClick={handleFollowing}
        />
      )}
      {totalMatches > showLimit && <LoadMore onLoadMore={handlePageChange} />}
      {pageScroll && <TopButton />}
    </>
  );
}
