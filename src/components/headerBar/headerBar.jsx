import { Container, AppBar } from '@mui/material';
import Navigation from 'components/navigation/navigation';

export default function HeaderBar() {
  return (
    <AppBar position="static" sx={{ p: '48px 0', bgcolor: 'primary.main' }}>
      <Container maxWidth="xl">
        <Navigation />
      </Container>
    </AppBar>
  );
}
