import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import BrushIcon from "@mui/icons-material/Brush";
import { useHistory, useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SubjectIcon from "@mui/icons-material/Subject";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

const drawerWidth = 240;

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "Showcases",
      icon: <PhotoCameraIcon color="primary" />,
      path: "/showcase",
    },
    {
      text: "Recipes",
      icon: <BrushIcon color="primary" />,
      path: "/recipes",
    },
    {
      text: "Create Commission",
      icon: <AddIcon color="primary" />,
      path: "/createCommission",
    },
  ];
  const menuItemsHidden = [
    {
      text: "Create Showcase",
      icon: <AddIcon color="primary" />,
      path: "/createShowcase",
    },
    {
      text: "Create Recipe",
      icon: <AddIcon color="primary" />,
      path: "/createRecipe",
    },
    {
      text: "Commissions",
      icon: <SubjectIcon color="primary" />,
      path: "/commsionsOverview",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        color="inherit"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            The Painters Room
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                disablePadding
                key={item.text}
                onClick={() => history.push(item.path)}
                sx={
                  location.pathname === item.path
                    ? { background: "#f4f4f4" }
                    : null
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItemsHidden.map((item) => (
              <ListItem
                disablePadding
                key={item.text}
                onClick={() => history.push(item.path)}
                sx={
                  location.pathname === item.path
                    ? { background: "#f4f4f4" }
                    : null
                }
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          //   background: "#f4f4f4",
          width: "100%",
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
