import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


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
      } button to="/dashboard/me" state={{ path: "/dashboard/me" }} component={NavLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/dashboard" state={{ path: "/dashboard/dashboard" }} component={NavLink}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/allorders" state={{ path: "/dashboard/allorders" }} component={NavLink}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="All Orders" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/addFood" state={{ path: "/dashboard/addFood" }} component={NavLink}>
      <ListItemIcon>
        <AddShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Add Food" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/addAdmin" state={{ path: "/dashboard/addAdmin" }} component={NavLink}>
      <ListItemIcon>
        <AdminPanelSettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/allreviews" state={{ path: "/dashboard/allreviews" }} component={NavLink}>
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
      } button to="/dashboard/me" state={{ path: "/dashboard/me" }} component={NavLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/dashboard" state={{ path: "/dashboard/dashboard" }} component={NavLink}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/orders" state={{ path: "/dashboard/orders" }} component={NavLink}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Orders" />
    </ListItem>
    <ListItem
      style={({ isActive }) =>
        isActive ? useStyles.listItemSelected : undefined
      } button to="/dashboard/review" state={{ path: "/dashboard/review" }} component={NavLink}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Review" />
    </ListItem>
  </div>
)