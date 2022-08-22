import React, { useState, useMemo } from "react";
import { dummyData } from "./MOCK_DATA";

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

  const card = useMemo(() => {
    return dummyData.map((items) => {
      return items;
    });
  }, []);

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
          {card.map((item) => {
            return (
              <Typography
                key={item.id}
              >{`id-${item.id} - Name- ${item.first_name}`}</Typography>
            );
          })}
        </Grid>
        <Grid item lg={12} md={12}>
          <Typography variant="h4">{`Counter -2 ${count}`}</Typography>
          <Button onClick={() => setCount(count + 1)} variant="contained">
            Counter-2
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MemoHooks;
