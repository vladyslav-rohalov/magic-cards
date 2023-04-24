import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderBar from 'components/headerBar/headerBar';

export default function SharedLayout() {
  return (
    <>
      <HeaderBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
