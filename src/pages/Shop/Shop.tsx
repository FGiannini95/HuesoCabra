import { Typography } from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';

export const Shop = () => {
  return (
    <section className='d-flex flex-column align-items-center p-5'>
      <Spinner />
      <Typography variant='h6'>En mantenimiento...</Typography>
    </section>
  )
}
