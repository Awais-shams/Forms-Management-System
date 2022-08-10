import React, { useState,useReducer } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShortcutIcon from '@mui/icons-material/Shortcut';



const ListItems = () => {
    
    const initialValue=true
    
    const reducer=(state,action)=>{
        switch(action){
            case 'businessFormHandler':
                return !state
                
            default:
                return state
        }
    }

    console.log(reducer.state)

    const[handler,dispatch]=useReducer(reducer,initialValue)
    


  const businessForms = [
    "Contact Us",
    "Email Subscription",
    "Complaints",
    "Software Evaluation",
    "Client Details",
    "Bug Tracker",
  ];

  const constructionForms=[
    {
        text:"Client Review",
        path:'/'
    },
    {
        text:"Status Update",
        path:'/'
    },
    {
        text:"Location Update",
        path:'/'
    },
    {
        text:"On-Site Enquiries",
        path:'/'
    },
  
  ]

  console.log(initialValue)

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton onClick={()=>dispatch('businessFormHandler')} sx={{backgroundColor:handler?'primary.main':null}}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="Business Forms"/>
          {handler ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={handler} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {businessForms.map((items, idx) => {
              return (
                <ListItemButton sx={{ pl: 4 }}>

                  <ListItemIcon>
                    <ShortcutIcon />
                  </ListItemIcon>
                  <ListItemText key={idx}>{items}</ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <Divider />
       
      </List>
    </div>
  );
};

export default ListItems;
