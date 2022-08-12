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

import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
  phoneNumbers: [""],
};

const validationSchema = Yup.object({
  phoneNumbers: Yup.number().required("Required").positive().integer(),
});

const EmployeeForm = () => {
  return (
    <Paper elevation={3} sx={{ ml: 30, mt: 12 }}>
      <Grid container spacing={2} sx={{ pl: 10, pr: 10, pb: 5 }}>
        <Grid item lg={12}>
          <Typography variant="h4">Employee Form</Typography>
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("onSubmit", JSON.stringify(values));
          }}
        >
          <Form>
              <FieldArray name='phoneNumbers'>
                {
                  (fieldArrayProps)=>{
                    const {push,remove,form}=fieldArrayProps
                    const {values,handleBlur,handleChange,touched,errors}=form
                    const {phoneNumbers}=values
                    console.log(phoneNumbers)
                    return(
                      phoneNumbers.map((phNo,idx)=>{
                        console.log("errors",errors)
                        console.log("touched",touched)
                        return(
                      <Grid item lg={12}>
                          <TextField
                            fullWidth
                            id={`phNo[${idx}]`}
                            name={`phNo[${idx}]`}
                            label="Phone Numbers"
                            type="text"
                            value={phNo[idx]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // error={touched.phNo[idx] && errors.phNo[idx]}
                            // helperText={touched.phNo[idx] && errors.phNo[idx]}
                          />
                      </Grid>

                        )
                      })
                    )
                  }
                }
              </FieldArray>
              <Grid item lg={12}>
                  <Button type="submit" variant="outlined">SUBMIT</Button>
              </Grid>
          </Form>
        </Formik>
      </Grid>
    </Paper>
  );
};

export default EmployeeForm;
