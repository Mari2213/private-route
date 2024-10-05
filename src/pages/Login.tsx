const Login = () => {
  return (
    <form className="mt-5 d-flex align-items-center justify-content-center flex-column">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-auto">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
          Password
        </label>
        <div className="col-auto">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default Login;
