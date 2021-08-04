import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

/**
 * COMPONENT
 */
const AuthFormLogin = (props) => {
  const [user, setUser] = useState({ username: '', password: '' });
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
  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={(evt) => handleSubmit(evt, user)}
        name={name}
        className={classes.root}
        autoComplete="off"
      >
        {/* <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div> */}

        <TextField
          id="standard-basic"
          label="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          name="password"
          value={user.password}
          type="password"
          onChange={handleChange}
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
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, user) {
      evt.preventDefault();
      const formName = evt.target.name;
      dispatch(authenticate(user, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormLogin);
