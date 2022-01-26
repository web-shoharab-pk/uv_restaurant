import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import * as React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddAdmin from '../components/Dashboard/AddAdmin/AddAdmin';
import AddFood from '../components/Dashboard/AddFood/AddFood';
import AllOrders from '../components/Dashboard/AllOrders/AllOrders';
import AllReviews from '../components/Dashboard/AllReviews/AllReviews';
import Cart from '../components/Dashboard/Cart/Cart';
import DashboardDetails from '../components/Dashboard/DashboardDetails';
import MyOrders from '../components/Dashboard/MyOrders/MyOrders';
import MyReview from '../components/Dashboard/MyReview/MyReview';
import Profile from '../components/Dashboard/Profile/Profile';
import UserDashboard from '../components/Dashboard/UserDashboard'; 
import { adminSidebarItem, userSidebarItem } from './../components/Dashboard/listItems';
import styles from './styles.module.css';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="#">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// } 
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { panel } = useParams();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/') 
      window.location.reload();
    }).catch((error) => {
      // An error happened.
    });
  }

  const [isAdmin, setIsAdmin] = React.useState(false)

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {

      user.getIdTokenResult()
        .then((idTokenResult) => {
          // Confirm the user is an Admin.
          if (!!idTokenResult.claims.admin) {
            // Show admin UI.
            setIsAdmin(!!idTokenResult.claims.admin)
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // User is signed out 
      toast.dismiss("signout");
    }
  }); 

  return (
    <div className={styles.dashboard_page}>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '35px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem to="/" component={Link}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem to="/dashboard/me" component={Link}>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem to="/dashboard/dashboard" component={Link}>
                    <Typography textAlign="center">DashBoard</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleSignOut()}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            {
              isAdmin ?
                <List>{adminSidebarItem}</List>
                :
                <List>{userSidebarItem}</List>
            }
          
            <Divider />

          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/* ADMIN Dashboard */}
              {
                isAdmin &&
                (panel === 'me' && isAdmin ? <Profile />
                  : panel === 'dashboard' && isAdmin ? <DashboardDetails />
                    : panel === 'allorders' && isAdmin ? <AllOrders />
                      : panel === 'addAdmin' && isAdmin ? <AddAdmin />
                        : panel === 'addFood' && isAdmin ? <AddFood />
                          : panel === 'allreviews' && isAdmin ? <AllReviews /> : null)

              }
              {/* USER Dashboard */}
              {

                !isAdmin &&
                (panel === 'me' && !isAdmin ? <Profile />
                  : panel === 'dashboard' && !isAdmin ? <UserDashboard />
                    : panel === 'orders' && !isAdmin ? <MyOrders />
                      : panel === 'review' && !isAdmin ? <MyReview />
                        : panel === 'cart' && !isAdmin ? <Cart /> : null
                )
              }
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
