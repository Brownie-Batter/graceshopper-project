import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    isAdmin: false,
  });
  const { name, displayName, handleSubmit, error } = props;
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
  const handleCheck = (e) => {
    let userForm = { ...user };
    if (e.target.checked) {
      userForm[e.target.name] = true;
    } else {
      userForm[e.target.name] = false;
    }

    setUser(userForm);
  };
  const classes = useStyles();
  return (
    <div className="sign-up-form">
      <form
        onSubmit={(evt) => handleSubmit(evt, user)}
        name={name}
        className={classes.root}
        autoComplete="off"
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            id="standard-basic"
            label="Username"
            name="username"
            defaultValue={user.username}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            type="password"
            defaultValue={user.password}
            onChange={handleChange}
          />
        </div>
        <TextField
          id="standard-basic"
          label="Email address"
          name="email"
          defaultValue={user.email}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            id="standard-basic"
            label="First name"
            name="first_name"
            defaultValue={user.first_name}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Last name"
            name="last_name"
            defaultValue={user.last_name}
            onChange={handleChange}
          />
        </div>
        <TextField
          id="standard-basic"
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
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultValue={user.isAdmin}
                name="isAdmin"
                onChange={handleCheck}
              />
            }
            label="Admin"
          />
          <div>
            <Button variant="contained" color="primary" type="submit">
              {displayName}
            </Button>
          </div>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, newUser) {
      evt.preventDefault();
      const formName = 'signup';
      dispatch(authenticate(newUser, formName));
    },
  };
};

export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
