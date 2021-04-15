import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { API } from 'aws-amplify';
import { CircularProgress } from '@material-ui/core';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

class Orders extends React.Component {

  constructor() {
    super()
    this.state = {
      expenses: [],
      isLoading: true,
      success: false,
      error: false
    }
  }

  apiName = 'expenseApi';
  path = '/expense';
  myInit = {};
  componentDidMount() {
    this.refreshExpenses()
  }

  refreshExpenses() {
    this.setState({ isLoading: true });
    API.get(this.apiName, this.path, this.myInit)
      .then(response => {
        this.setState({ isLoading: false, expenses: JSON.parse(response.body) });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? <CircularProgress /> :
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
                {this.state.expenses.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.item}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.pi}</TableCell>
                    <TableCell align="right">{row.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
            <div>
              <Link color="primary" href="#" onClick={preventDefault}>
                See more expenses
            </Link>
            </div>
          </React.Fragment>
        }
      </>
    );
  }
}

export default Orders;