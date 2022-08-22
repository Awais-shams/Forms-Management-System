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
  phoneNumbers: [0],
};
const validationSchema = Yup.object({
  phoneNumbers: Yup.number()
    .positive()
    .nullable(true)
    .transform((val) => (val === val ? val : null)),
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
            <FieldArray name="phoneNumbers">
              {(fieldArrayProps) => {
                const { form, remove, push } = fieldArrayProps;
                const { values, errors, touched, handleChange, handleBlur } =
                  form;
                const { phoneNumbers } = values;

                // console.log(phoneNumbers)
                // console.log(form)
                console.log("errors", errors);
                return (
                  <>
                    <Grid item>
                      {phoneNumbers.map((phoneNumber, index) => {
                        console.log(phoneNumber);
                        return (
                          <Grid item key={index}>
                            <TextField
                              fullWidth
                              type="number"
                              id={`phoneNumbers[${index}]`}
                              name={`phoneNumbers[${index}]`}
                              label="Phone Number"
                              value={phoneNumber[index]}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={Boolean(
                                touched.phoneNumbers
                                  ? touched.phoneNumbers[index]
                                  : null && errors.phoneNumbers
                                  ? errors.phoneNumbers[index]
                                  : null
                              )}
                              helperText={
                                (
                                  touched.phoneNumbers
                                    ? touched.phoneNumbers[index]
                                    : null && errors.phoneNumbers
                                    ? errors.phoneNumbers[index]
                                    : null
                                )
                                  ? errors.phoneNumbers
                                  : null
                              }
                            />
                            <Button
                              variant="contained"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => push(index)}
                            >
                              Add
                            </Button>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </>
                );
              }}
            </FieldArray>

            <Grid item lg={12}>
              <Button type="submit" variant="contained">
                SUBMIT
              </Button>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Paper>
  );
};

export default EmployeeForm;
