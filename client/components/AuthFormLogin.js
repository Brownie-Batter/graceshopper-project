import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validator from 'validator';
/**
 * COMPONENT
 */
const AuthFormLogin = (props) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { authenticate } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        display: 'flex',
      },
    },
  }));

  const handleChange = (e) => {
    let userForm = { ...user };
    userForm[e.target.name] = e.target.value;

    if (e.target.name === 'username') {
      let val = validator.matches(e.target.value, /^[a-zA-Z0-9]{1,20}$/);
      console.log(val);
    }

    setUser(userForm);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authenticate(user, 'login');
  };

  const classes = useStyles();

  return (
    <div>
      <form
        onSubmit={(evt) => handleSubmit(evt, user)}
        name="login"
        className={classes.root}
        autoComplete="off">
        <div style={{ display: 'flex' }}>
          <TextField
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            value={user.password}
            type="password"
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!user.username || !user.password}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    authenticate: (user, formName) => dispatch(authenticate(user, formName)),
  };
};

export const Login = connect(null, mapDispatch)(AuthFormLogin);
