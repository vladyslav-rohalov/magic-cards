import Skeleton from '@mui/material/Skeleton';

export default function SkeletonLoader() {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={380}
        height={460}
        sx={{ borderRadius: 5, margin: '16px auto' }}
      />
      <Skeleton
        variant="rectangular"
        width={380}
        height={460}
        sx={{ borderRadius: 5, margin: '16px auto' }}
      />
      <Skeleton
        variant="rectangular"
        width={380}
        height={460}
        sx={{ borderRadius: 5, margin: '16px auto' }}
      />
    </>
  );
}
