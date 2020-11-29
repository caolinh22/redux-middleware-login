import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
// import { loginRequestFinal } from "./saga/rootSaga";
import { login } from "./actions/actionType";
// import PropTypes from 'prop-types'

function Form(props) {
  const { error, loading, su } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const user = {
    email: email,
    password: password
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(login(user));
  };
  return (
    <div>
      <form>
        <p>Login</p>
        <label>
          Email:
          <input
            type="text"
            email="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <p></p>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <p></p>
        <button onClick={handleSubmit}>Login</button>
      </form>
      {loading && <h3 className="loading">Loading... </h3>}
      {error && (
        <h3 className="error">
          The email address that you've entered doesn't match any account!
        </h3>
      )}
      {su && <h3 className="su">Welcome!</h3>}
    </div>
  );
}
const mapState = (state) => ({
  su: state.su,
  error: state.error,
  loading: state.loading
});

export default connect(mapState, null)(Form);
