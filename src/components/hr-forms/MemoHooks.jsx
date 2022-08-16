import React, { useState } from "react";

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

const MemoHooks = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
        <Grid item lg={12}>
          <Typography variant="h4">Memo Hooks</Typography>
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
            <Typography variant="h4">{`Counter -1 without Memo Hooks ${count}`}</Typography>
            <Button onClick={()=>setCount(count+1)} variant="contained">Counter-1</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MemoHooks;
