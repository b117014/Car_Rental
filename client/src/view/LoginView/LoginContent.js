import React from "react";
import { useFormik } from "formik";

const LoginContent = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (val) => console.log(val),
  });

  return (
    <main className="main">
      <div className="container ">
        <section className="wrapper card shadow">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
            <p className="text text-normal">
              New user?{" "}
              <span>
                <a href="/register" className="text text-links">
                  Create an account
                </a>
              </span>
            </p>
          </div>
          <form name="login" className="form" onSubmit={formik.handleSubmit}>
            <div className="input-control">
              <label for="email" className="input-label" hidden>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </div>
            <div className="input-control">
              <label for="password" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </div>
            <div className="input-control">
              <button
                type="submit"
                className="btn btn-primary w-100"
                value="Login"
              >
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default LoginContent;
