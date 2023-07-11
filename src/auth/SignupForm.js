import { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import "./Form.css";

/** Signup form
 *
 * Displays form and manages updates to form state on change
 * On submission:
 * - calls signup func passed down as prop
 * -redirects to /companies route if successful
 *
 *  - Route: /signup
 */

const SignupForm = ({ signup }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrs, setFormErrs] = useState([]);

  console.debug(
    "SignupForm",
    "signup=",
    typeof signup,
    "formData=",
    formData,
    "formErrs=",
    formErrs
  );

  /** Submission handler:
   *
   * calls singup func and will redirect to /companies if successful
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await signup(formData);
    if (res.success) {
      history.push("/");
    } else {
      setFormErrs(res.error);
    }
  };

  // Update form data
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="Form">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3 text-light text-bold">Sign Up</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="firstName">First name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {formErrs.length ? (
                <Alert type="danger" messages={formErrs} />
              ) : null}

              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
