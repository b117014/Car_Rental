import React from "react";
import { useFormik } from "formik";

const RegisterContent = ({ onUserRegister }) => {
  const formik = useFormik({
    initialValues: { email: "", password: "", name: "" },
    onSubmit: (val) => {
      onUserRegister(val);
      console.log(val);
    },
  });

  return (
    <main className="main">
      <div className="container ">
        <section className="wrapper card shadow">
          <div className="heading">
            <div className="text-center">
              <h1 className="text text-large">Register</h1>
              <p className="text text-normal">
                Already have account
                <span>
                  <a href="/login" className="text text-links mx-2">
                    login
                  </a>
                </span>
              </p>
            </div>
          </div>
          <form name="login" className="form" onSubmit={formik.handleSubmit}>
            <div className="input-control">
              <label for="name" className="input-label" hidden>
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
            </div>
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
                value={formik.values.email}
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
                value={formik.values.password}
                required
              />
            </div>
            <div className="input-control">
              <button
                type="submit"
                className="btn btn-primary w-100"
                value="Login"
              >
                Register
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default RegisterContent;
