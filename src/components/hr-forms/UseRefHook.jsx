import React, { useEffect, useRef } from "react";
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

const UseRefHook = () => {
  let data = useRef([]);

  useEffect(() => {
    console.log("awos");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return (data.current = res);
      })
      .catch((err) => console.log(err));
  }, [data]);

  console.log(data.current);

  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
        <Grid item lg={12}>
          <Typography variant="h4">useRef Hooks</Typography>
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
        <Grid item lg={12} md={12}></Grid>
      </Grid>
    </Paper>
  );
};

export default UseRefHook;
