import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);
const useStyles = {
  listItemSelected: {
    backgroundColor: "#bbdefb",
    // color: "gray", 
  },
}


export const adminSidebarItem = (

  <div>
    <ListSubheader inset>Admin</ListSubheader>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/me" component={NavLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/dashboard" component={NavLink}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/allorders" component={NavLink}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="All Orders" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/addFood" component={NavLink}>
      <ListItemIcon>
        <AddShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Add Food" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/addAdmin" component={NavLink}>
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/allreviews" component={NavLink}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="All Reviews" />
    </ListItem>
  </div>
)

export const userSidebarItem = (
  <div>
    <ListSubheader inset>User </ListSubheader>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/me" component={NavLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/dashboard" component={NavLink}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/cart" component={NavLink}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/orders" component={NavLink}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Orders" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/review" component={NavLink}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Review" />
    </ListItem>
  </div>
)