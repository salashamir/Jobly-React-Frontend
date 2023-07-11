import { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../context/UserContext";

/** Show details for job card
 *  rendered by JobCardList to show card
 *
 */

const JobCard = ({ id, title, salary, equity, companyName }) => {
  console.debug("JobCard");

  const { appliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  // updates applied status
  useEffect(() => {
    console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

    setApplied(appliedToJob(id));
  }, [id, appliedToJob]);

  // apply for a job
  const handleApply = async (event) => {
    if (appliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  };

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>{companyName}</p>
        {salary && (
          <div>
            <small>Salary: {salary}</small>
          </div>
        )}
        {equity !== undefined && (
          <div>
            <small>Equity: {equity}</small>
          </div>
        )}
        <button
          onClick={handleApply}
          disabled={applied}
          className="btn btn-danger font-weight-bold"
        >
          {applied ? "Applied!" : "Apply now"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
