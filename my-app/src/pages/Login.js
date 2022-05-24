function Login() {
  return (
    <>
      <p>Login:</p>
      <form>
        <h1>welcome to hour site:</h1>
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
          type="number"
          placeholder="password"
          onChange={onabort}
        />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Login;
