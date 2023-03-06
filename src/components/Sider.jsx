import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon, Paper } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";

const Sider= (props)=> {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={9} class="sider__container">
      <List  
        sx={{ 
          width: "100%",
          maxWidth: 300,
          minHeight: ["0vh", "100vh"],
        }}
        
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className="mb-5 ">
             <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065641/samples/Attendance%20pict/logos1_v3xdrc.png" alt="logo" className= "mb-5 logo__footer-dash" />
          </ListSubheader>
        }

       
      >
       
        {props?.items?.map((item, index) => (
          <ListItemButton 
            selected={selectedIndex === index && true}
            onClick={() => setSelectedIndex(index)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
export default Sider;
