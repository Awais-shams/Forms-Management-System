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

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const initialValues = {
  empId: "awais",
  empName: "",
  gender: "",
  designation: "",
  jobStatus: "",
  experience: "",
  contactNo: "",
  building: "",
  department: "",
};

const validationSchema = Yup.object({
  empId: Yup.string().required('Required'),
  empName: Yup.string()
    .required("Required")
    .min(3, "Name must be greater than 3"),
  gender: Yup.string().required("Requried"),
  designation: Yup.string().required("Required"),
  jobStatus: Yup.string().required("Required"),
  experience: Yup.string().required("Required"),
});

const JobApplicationForm = () => {
  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
        <Grid item lg={12}>
          <Typography variant="h4">Job Application Form</Typography>
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
        <Grid item lg={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>
              console.log("OnSubmit", JSON.stringify(values))
            }
          >
            <Form>
              <Field name="empId">
                {(props) => {
                  const { field, form, meta } = props;
                  const {handleChange,handleBlur}=form
                  console.log(field.value.empId)
                  return (
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Employee Id"
                        id={field.name}
                        name={field.name}
                        type="text"
                        value={field.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={meta.error && meta.touched}
                        helperText={meta.error && meta.touched ? meta.error:null}
                      />
                    </Grid>
                  );
                }}
              </Field>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobApplicationForm;
