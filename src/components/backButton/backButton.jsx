import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
  return (
    <Button variant="outlined" startIcon={<ArrowBackIcon />}>
      Back
    </Button>
  );
}
