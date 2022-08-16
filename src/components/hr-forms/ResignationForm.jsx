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
} from "@mui/material";
import Grid from "@mui/material/Grid";

import { useFormik } from "formik";
import * as Yup from "yup"; 

const initialValues = {
  firstName: "",
  lastName: "",
  leaving: "",
  companyExp: "",
  learningExp: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(5, "Must be 5 characters or less")
    .required("Required"),
});

const ResignationForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
          <Grid item lg={12}>
            <Typography variant="h4">Resignation Form</Typography>
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

          <Grid item lg={12} md={12} sm={12} xs={3}>
            <Typography variant="h5">Name</Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              helperText="Enter Last Name"
            />
          </Grid>

          <Grid item lg={12} md={12}>
            <Typography variant="h5">When are you leaving us?</Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              id="leaving"
              name="leaving"
              label="Leaving"
              type="text"
              value={formik.values.leaving}
              onChange={formik.handleChange}
              helperText="Enter the leaving details"
            />
          </Grid>

          <Grid item lg={12} xs={3}>
            <Typography variant="h5">
              Please rate your experience in our company
            </Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              id="companyExp"
              name="companyExp"
              label="Experience"
              type="text"
              value={formik.values.companyExp}
              onChange={formik.handleChange}
              helperText="Share your company experience"
            />
          </Grid>

          <Grid item lg={12}>
            <Typography variant="h5">
              How much have you learned from your time with us?
            </Typography>
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              fullWidth
              id="learningExp"
              name="learningExp"
              label="Learning"
              multiline
              rows={5}
              type="text"
              value={formik.values.learningExp}
              onChange={formik.handleChange}
              helperText="Share your learning experience"
            />
          </Grid>

          <Grid item lg={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ResignationForm;
