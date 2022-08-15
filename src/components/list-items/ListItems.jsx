import React, { useReducer } from "react";

// MUi components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";

//  Mui Icons
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ShortcutIcon from '@mui/icons-material/Shortcut';

// Listing Data
import { hrForms } from "./listingData";
import { eCommerceForms } from "./listingData";
import { educationForm } from "./listingData";

import { useNavigate } from "react-router-dom";


// useReducer
const initialValue={
  hr:false,
  ecommerce:false,
  education:false,
  nested:false
}

const reducer=(state,action)=>{
    switch(action){
        case 'hrFormsHandler':
            return {hr: !state.hr}
        case 'eCommerceFormsHandler':
        return {ecommerce: !state.ecommerce}
        case 'educationFormsHandler':
        return {education: !state.education}
        case 'nestedFormsHandler':
        return {nested: !state.nested}
        default:
            return "Invalid Handler"
    }
}


const ListItems = () => {
    
  const[handler,dispatch]=useReducer(reducer,initialValue)
  const navigate=useNavigate()


  return (
    <div>
      <Toolbar />
      <List>
        {/* Hr Forms Listing */}
        <ListItemButton onClick={()=>dispatch('hrFormsHandler')} sx={{backgroundColor:handler.hr?'primary.main':null}}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="HR-Forms"/>
          {handler.hr ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={handler.hr} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {hrForms.map((items, idx) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={idx} onClick={()=>navigate(items.path)}>
                  <ListItemIcon>
                    <ShortcutIcon />
                  </ListItemIcon>
                  <ListItemText>{items.text}</ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <Divider />


        {/* Ecommerce Forms Listing */}
        <ListItemButton onClick={()=>dispatch('eCommerceFormsHandler')} sx={{backgroundColor:handler.ecommerce?'primary.main':null}}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="E-Commerce Forms"/>
          {handler.ecommerce ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={handler.ecommerce} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {eCommerceForms.map((items, idx) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={idx}>

                  <ListItemIcon>
                    <ShortcutIcon />
                  </ListItemIcon>
                  <ListItemText >{items.text}</ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <Divider />

        {/* Education Forms Listing */}
        <ListItemButton onClick={()=>dispatch('educationFormsHandler')} sx={{backgroundColor:handler.education?'primary.main':null}}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="Education Forms"/>
          {handler.education ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={handler.education} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {educationForm.map((items, idx) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={idx}>

                  <ListItemIcon>
                    <ShortcutIcon />
                  </ListItemIcon>
                  <ListItemText >{items.text}</ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <Divider />

        {/* Nested Forms */}
        <ListItemButton onClick={()=>dispatch('nestedFormsHandler')} sx={{backgroundColor:handler.nested?'primary.main':null}}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary="Nested Forms"/>
          {handler.nested ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={handler.nested} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {eCommerceForms.map((items, idx) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={idx}>

                  <ListItemIcon>
                    <ShortcutIcon />
                  </ListItemIcon>
                  <ListItemText >{items.text}</ListItemText>
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
       
       
      </List>
    </div>
  );
};

export default ListItems;
