import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    address: '',
    email: '',
  });
  const { handleSubmit } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  }));

  const handleChange = (e) => {
    let userForm = { ...user };
    userForm[e.target.name] = e.target.value;
    setUser(userForm);
  };

  const classes = useStyles();

  return (
    <div className="sign-up-form">
      <form
        onSubmit={(evt) => handleSubmit(evt, user)}
        name="signup"
        className={classes.root}
        autoComplete="off">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            required
            label="Username"
            name="username"
            defaultValue={user.username}
            onChange={handleChange}
          />
          <TextField
            required
            label="Password"
            name="password"
            type="password"
            defaultValue={user.password}
            onChange={handleChange}
          />
        </div>
        <TextField
          required
          label="Email address"
          name="email"
          defaultValue={user.email}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            required
            label="First name"
            name="first_name"
            defaultValue={user.first_name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Last name"
            name="last_name"
            defaultValue={user.last_name}
            onChange={handleChange}
          />
        </div>
        <TextField
          required
          label="Address"
          name="address"
          defaultValue={user.address}
          onChange={handleChange}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, newUser) {
      evt.preventDefault();
      dispatch(authenticate(newUser, 'signup'));
    },
  };
};

export const Signup = connect(null, mapDispatch)(AuthForm);
