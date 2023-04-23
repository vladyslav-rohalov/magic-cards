import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getUsers } from 'utils/apiUsers';
import LoadMore from 'components/buttonLoadMore/loadMore';
import UserList from 'components/userList/userList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B2A99',
    },
  },
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const users = await getUsers(page);

      setUsers(prevUsers => {
        return [...prevUsers, ...users];
      });

      setIsLoading(false);
    };

    fetchUsers();
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <UserList users={users} isLoading={isLoading} />
      <LoadMore onLoadMore={handlePageChange} />
    </ThemeProvider>
  );
}
