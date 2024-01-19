import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getCategories } from "../api/GetCategories";
import IMealCategory from "../models/IMealCategory";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Layout({ children }: any) {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState<IMealCategory[] | null>(null);

  useEffect(() => {
    const data = getCategories();

    data.then((d) => {
      let categoriesFetched = d.data as any;
      categoriesFetched = categoriesFetched.categories;

      const preprocessedCategories: IMealCategory[] = categoriesFetched.map(
        (c: any) => ({
          id: c.idCategory,
          name: c.strCategory,
          description: c.strCategoryDescription,
          img: c.strCategoryThumb,
        })
      );

      setCategories(preprocessedCategories);
    });
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Get Ur Meals!
      </Typography>
      <Divider />
      <List>
        {categories?.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => navigate(`/meals?c=${item.name}`)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex", marginBottom: 10 }}>
        <AppBar component="nav" sx={{ backgroundColor: "#63898a" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={() => navigate("/")}
            >
              <Typography variant="h6">Get Ur Meals!</Typography>
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              disableRipple
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => navigate("/")}
            >
              <Typography variant="h6" sx={{ width: "fit-content" }}>
                Get Ur Meals!
              </Typography>
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                key={"category"}
                sx={{ color: "#fff" }}
                onClick={handleDrawerToggle}
              >
                {"category"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      {children}
    </>
  );
}
