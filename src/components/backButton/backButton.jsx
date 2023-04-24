import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
  return (
    <Link to="/">
      <Button variant="outlined" startIcon={<ArrowBackIcon />}>
        Back
      </Button>
    </Link>
  );
}
