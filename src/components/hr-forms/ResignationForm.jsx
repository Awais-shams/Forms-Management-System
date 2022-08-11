import React from 'react'

import { Container,Paper,Typography,TextField,Stack,Breadcrumbs,Link} from '@mui/material'
import Grid from '@mui/material/Grid'

import { useFormik } from 'formik'

const initialValues={
    firstName:'',
    lastName:'',
    leaving:'',
    companyExp:'',
    learningExp:''
}

const ResignationForm = () => {

    const formik=useFormik({
        initialValues,
    })

  return (
    <Paper elevation={3} sx={{ml:30,mt:12}}>

    <Grid container spacing={2} sx={{pl:10,pr:10}}>

            <Grid item lg={12}>
            <Typography variant='h4'>Resignation Form</Typography>

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
            <Typography variant='h5'>Name</Typography>

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
                helperText="Enter First Name"
                
            />

           </Grid>

           <Grid item lg={6} md={12} sm={12} xs={12}>

           <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                helperText="Enter Last Name"
            />

           </Grid>

           <Grid item lg={12} md={12} >
            <Typography variant='h5'>When are you leaving us?</Typography>

            </Grid>
           <Grid item lg={6} md={12} sm={12} xs={12}>

            <TextField
            fullWidth
            id="leave"
            name="leave"
            label="Leaving"
            helperText="Enter the leaving details"
            />

           </Grid>

           <Grid item lg={12} xs={3}>
            <Typography variant='h5'>Please rate your experience in our company</Typography>

            </Grid>
           <Grid item lg={6} md={12} sm={12} xs={12}>

            <TextField
            fullWidth
            id="experience"
            name="experience"
            label="Experience"
            helperText="Share your company experience"
            />

           </Grid>

           <Grid item lg={12}>
            <Typography variant='h5'>How much have you learned from your time with us?</Typography>

            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={12}>

            <TextField
            fullWidth
            id="learning"
            name="learning"
            label="Learning"
            multiline
            rows={5}
            helperText="Share your learning experience"
            />

           </Grid>

          
    </Grid>

    

    </Paper>
  )
}

export default ResignationForm