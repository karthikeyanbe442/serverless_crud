import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Tooltip } from '@material-ui/core';

export const mainListItems = (
  <div>
    <Tooltip title="Dashboard">
    <ListItem button component="a" href="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Expenses">
    <ListItem button component="a" href="/dashboard/expense">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Expenses" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Credit Cards">
    <ListItem button>
      <ListItemIcon>
        <CreditCardIcon />
      </ListItemIcon>
      <ListItemText primary="Credit Cards" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Debit Cards/Cash">
    <ListItem button>
      <ListItemIcon>
        <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="Debit Cards/Cash" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Loans">
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Loans" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Indian Expense">
    <ListItem button>
      <ListItemIcon>
        <AirplanemodeActiveIcon />
      </ListItemIcon>
      <ListItemText primary="Indian Expense" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Reports">
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Tooltip>
  </div>
);

export const secondaryListItems = (
  <div>
    <Tooltip title="Current month report">
        <ListItem button>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month report" />
        </ListItem>
    </Tooltip>
    <Tooltip title="Current quarter report">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter report" />
    </ListItem>
    </Tooltip>
    <Tooltip title="Current year report">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last year report" />
    </ListItem>
    </Tooltip>
  </div>
);