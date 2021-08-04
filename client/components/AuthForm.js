import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

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
        width: '25ch',
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
    <div>
      <form
        onSubmit={(evt) => handleSubmit(evt, user)}
        name={name}
        className={classes.root}
        autoComplete="off"
      >
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
        <TextField
          id="standard-basic"
          label="Email address"
          name="email"
          defaultValue={user.email}
          onChange={handleChange}
        />
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
        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          defaultValue={user.address}
          onChange={handleChange}
        />
        <Checkbox
          defaultValue={user.isAdmin}
          label="Admin"
          name="isAdmin"
          onChange={handleCheck}
        />
        <div>
          <button type="submit">{displayName}</button>
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
