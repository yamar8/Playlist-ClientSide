function Login() {
  return (
      <div className="login">
        <h1>welcome to hour site:</h1>
      <form>
      <h3>Login:</h3>
        <span>enter mail: </span>
        <input
          name="email"
          type="email"
          placeholder="mail"
          onChange={onabort}
        />
        <br />
        <br />
        <span>enter password: </span>
        <input
          name="password"
          placeholder="password"
          onChange={onabort}
        />
        <br />
        <br />

        <button id="submit" type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
