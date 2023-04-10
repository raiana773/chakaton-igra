import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCartContext } from '../context/CartContext';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function CartPage() {

  return (
    <TableContainer sx={{ padding:'10px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sub Price</TableCell>
          </TableRow>
        </TableHead>
       
        
          
          </Table>
          <Box sx={{display:'flex',justifyContent:'space-between',width:'100%' }} >
          <Typography variant='h4'>
            
          </Typography>
          <Button component={Link} to="/success" variant='contained'>Buy</Button>
          </Box>
      
    </TableContainer>
  );
}