import { useState, useContext } from "react";
import Alert from "../common/Alert";
import JoblyApi from "../api/api";
import UserContext from "../context/UserContext";

import "./ProfileForm.css";

/** Profile editing form
 *
 * displays profile form and handles changes to local form state
 * form submission calls api to save data and triggers user reloading
 *
 * Confirmation of successful save is a simple alert
 *
 * Route: /profile
 */

const ProfileForm = () => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
    username: currUser.username,
    password: "",
  });
  const [formErrs, setFormErrs] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  console.debug(
    "ProfileForm",
    "currUser=",
    currUser,
    "formData=",
    formData,
    "formErrs=",
    formErrs,
    "saveConfirmed=",
    saveConfirmed
  );

  /** form submit:
   *
   * 1. attempt to save to backend and report any errors
   * 2. if successful:
   *  clear prev error messages and pwd
   *  show save confirmed message
   *  set currUser info throught site
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    const username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (error) {
      debugger;
      setFormErrs(error);
      return;
    }

    setFormData((prev) => ({ ...prev, password: "" }));
    setFormErrs([]);
    setSaveConfirmed(true);

    // reload user info thorughout site
    setCurrUser(updatedUser);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrs([]);
  };

  return (
    <div className="ProfilePage">
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="text-white">Profile:</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="username">Username:</label>
                <p className="form-control-plaintext">{formData.username}</p>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-2">
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
              <div className="form-group mt-2">
                <label htmlFor="password">
                  Confirm password to save updated profile info:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {formErrs.length ? (
                <Alert type="danger" messages={formErrs} />
              ) : null}
              {saveConfirmed ? (
                <Alert
                  type="success"
                  messages={["Updated profile information!"]}
                />
              ) : null}
              <button
                className="btn btn-secondary btn-block mt-4"
                type="submit"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
