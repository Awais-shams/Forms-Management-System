import React, { useEffect, useRef, useState } from "react";
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
  const [count, setCount] = useState(0);
  const data = useRef(0);

  useEffect(() => {
    data.current = data.current + 1;
  }, [count]);

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
        <Grid item lg={12} md={12}>
          <Typography variant="h4">{`count-${count}`}</Typography>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Counter
          </Button>
          <Typography variant="h4">{`Render Count-${data.current}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UseRefHook;
