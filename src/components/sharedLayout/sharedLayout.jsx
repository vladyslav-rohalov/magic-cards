import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import HeaderBar from 'components/headerBar/headerBar';

export default function SharedLayout() {
  return (
    <>
      <HeaderBar />
      <Container maxWidth="xl">
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
