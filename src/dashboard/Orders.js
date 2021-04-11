import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, item, category, paymentMethod, amount) {
  return { id, date, item, category, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2021', 'Taaza Mart', 'Groceries', 'VISA ⠀•••• 8447', 12.45),
  createData(1, '16 Mar, 2021', 'Costco', 'Groceries', 'VISA ⠀•••• 8447', 159.01),
  createData(2, '16 Mar, 2021', 'Publix', 'Groceries', 'VISA ⠀•••• 8447', 14.90),
  createData(3, '01 Mar, 2021', 'The Parq', 'Rent', 'VISA ⠀•••• 8447', 1110.01),
  createData(4, '01 Mar, 2021', 'Teco Energy', 'Electricity', 'MasterCard ⠀•••• 9555', 69.04),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more expenses
        </Link>
      </div>
    </React.Fragment>
  );
}