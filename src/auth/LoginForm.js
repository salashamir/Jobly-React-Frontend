import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Alert from "../common/Alert";
import "./Form.css";

/** Login form
 *
 * Displays form and manages updates to form state on change
 * On submission:
 * - calls login func passed down as prop
 * -redirects to /companies route if successful
 *
 *  - Route: /login
 */

const LoginForm = ({ login }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrs, setFormErrs] = useState([]);

  console.debug(
    "LoginForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "formErrs=",
    formErrs
  );

  /** Submission handler:
   *
   * calls login func and will redirect to /companies if successful
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await login(formData);
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
        <h3 className="mb-3 text-light text-bold">Log In</h3>
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

export default LoginForm;
