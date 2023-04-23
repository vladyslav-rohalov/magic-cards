import SkeletonLoader from 'components/skeleton/skeleton';
import UserCard from 'components/userCard/userCard';
import { UserListStyled } from './userList.styled';
import { Container } from '@mui/material';

export default function UserList({ users, isLoading }) {
  return (
    <Container maxWidth="1280">
      <UserListStyled>
        {!isLoading ? (
          users.map(user => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
                tweets={user.tweets}
                followers={user.followers}
                avatar={user.avatar}
                user={user.user}
                isFollowing={user.isFollowing}
              />
            );
          })
        ) : (
          <SkeletonLoader />
        )}
      </UserListStyled>
    </Container>
  );
}
