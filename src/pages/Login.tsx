import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form className="mt-5 d-flex align-items-center justify-content-center">
      <div className="justify-content-between d-flex flex-column">
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-auto ms-4">
            <input
              type="email"
              value={email}
              className="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-auto">
            <input
              type="password"
              value={password}
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
