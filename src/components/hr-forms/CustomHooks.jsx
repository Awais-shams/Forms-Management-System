import React from "react";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Stack,
  Breadcrumbs,
  Link,
  Button,
  Grid,
} from "@mui/material";

import useData from "../../hooks/useData";

const CustomHooks = () => {

    const data=useData()

    console.log("awais",data)

  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
        <Grid item lg={12}>
          <Typography variant="h4">Custom Hooks</Typography>
        </Grid>
        <Grid item lg={12} md={12}>
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link>Home</Link>
              <Link>Home</Link>
              <Link>Home</Link>
            </Breadcrumbs>
          </Stack>
        </Grid>
        <Grid item lg={12} md={12}>
            {
                data.map((message)=>{
                    return <Typography variant='h6' key={message.id}>{message.name}</Typography>
                })
            }
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomHooks;
