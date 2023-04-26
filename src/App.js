import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './components/sharedLayout/sharedLayout';

const Home = lazy(() => import('./pages/home/home'));
const Tweets = lazy(() => import('./pages/tweets/tweets'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
      </Route>
    </Routes>
  );
}
