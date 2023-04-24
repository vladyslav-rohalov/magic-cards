import SkeletonLoader from 'components/skeleton/skeleton';
import UserCard from 'components/userCard/userCard';
import { UserListStyled } from './userList.styled';

export default function UserList({ users, isLoading, onClick }) {
  return (
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
              onClick={onClick}
            />
          );
        })
      ) : (
        <SkeletonLoader />
      )}
    </UserListStyled>
  );
}
