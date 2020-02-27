import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import * as yup from 'yup'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Derek 4 President
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignUp() {
  const classes = useStyles()
  const [formValues, setFormValues] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const schema = {
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup
      .number()
      .required()
      .positive('must be greater than 0')
      .integer('must be an integer'),
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required()
  }

  const onChange = e => {
    const {
      target: { name, value }
    } = e || {}

    schema[name].validate(value).catch(e => {
      setFormErrors({ ...formErrors, [name]: e.message })
    })

    setFormErrors({ ...formErrors, [name]: undefined })
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = () => {
    const isValid = schema.isValid(yup.object().shape(formValues))
    if (isValid) {
      // do something
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label={formErrors.firstName || 'First Name'}
                autoFocus
                onBlur={onChange}
                onChange={onChange}
                error={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label={formErrors.lastName || 'Last Name'}
                name='lastName'
                autoComplete='lname'
                onBlur={onChange}
                onChange={onChange}
                error={formErrors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label={formErrors.email || 'Email Address'}
                name='email'
                autoComplete='email'
                onBlur={onChange}
                onChange={onChange}
                error={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label={formErrors.password || 'Password'}
                type='password'
                id='password'
                autoComplete='current-password'
                onBlur={onChange}
                onChange={onChange}
                error={formErrors.password}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive black metal lyrics in my email.'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='age'
                label={formErrors.age || 'Age'}
                type='age'
                id='age'
                onBlur={onChange}
                onChange={onChange}
                error={formErrors.age}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='overline' color='secondary'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
