import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter } from "react-router-dom";
import Nav from "./routes/Nav";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import UserContext from "./context/UserContext";
import jwt from "jsonwebtoken";
import LoadingSpinner from "./common/LoadingSpinner";

// key storing token in localStorage for re-login
export const TOKEN_STORAGE_ID = "jobly-token";

/** Jobly app
 *
 * -infoLoaded - has user data been pulled from API? (manages loading spinner)
 *
 * -currUser - user obj from API. used to tell if someone is loged in, passed around via context
 *
 * -token - authetnication JWT for logged in users, required for most API calls, initially read from localstorage and synced via custom localstorage hook
 *
 */

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    "App",
    "infoLoaded=",
    infoLoaded,
    "currUser=",
    currUser,
    "token=",
    token
  );

  // Load in user info from API. Will run when a user is logged in and has a token
  // reruns when user logs out, dependency is value of token
  useEffect(() => {
    console.debug("App useEffect loadUserInfo", "token=", token);

    const getCurrUser = async () => {
      if (token) {
        try {
          const { username } = jwt.decode(token);
          // put token on API class so we can make API calls
          JoblyApi.token = token;

          const currUser = await JoblyApi.getCurrUser(username);
          setCurrUser(currUser);
          setApplicationIds(new Set(currUser.applications));
        } catch (error) {
          console.error("App loadUserInfo: problem loading", error);
          setCurrUser(null);
        }
      }
      setInfoLoaded(true);
    };

    // infoloaded set to false shile getcurruser runs, and once data fetched or error it wil be set back to false
    setInfoLoaded(false);
    getCurrUser();
  }, [token]);

  // function to handle logout
  const logout = () => {
    console.debug("App logout");
    setCurrUser(null);
    setToken(null);
  };

  /** Function handles signup:
   *
   * Automatically logs user in upon signup (sets token)
   *
   * AWAIT function and check return value
   */
  const signup = async (signupData) => {
    try {
      const token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("signup failed", error);
      return { success: false, error };
    }
  };

  /** Function handles login */

  const login = async (loginData) => {
    try {
      const token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }
  };

  /** Function checks if a job was applied to  */
  const appliedToJob = (id) => {
    return applicationIds.has(id);
  };

  /** Function to apply for a job: makes API call + updates set of application ids state */
  const applyToJob = (id) => {
    if (appliedToJob(id)) return;

    JoblyApi.applyToJob(currUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  };

  // if infoloaded false only show loading spinner
  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currUser, setCurrUser, appliedToJob, applyToJob }}
      >
        <div className="App">
          <Nav logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
