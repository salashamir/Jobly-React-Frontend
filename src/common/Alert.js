/**
 * Component for showing bootstrap type alerts
 *
 * Used in {LoginForm, SignupForm, PorfileForm}
 */

const Alert = ({ type = "danger", messages = [] }) => {
  console.debug("Alert", "type=", type, "messages=", messages);

  return (
    <div className={`mt-2 alert alert-${type}`} role="alert">
      {messages.map((error) => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};

export default Alert;
