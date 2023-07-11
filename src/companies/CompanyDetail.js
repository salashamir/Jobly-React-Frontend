import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

import "./CompanyDetail.css";

/** Company Detail Page for indivdiual company
 *
 * Displays info about company from api, along w jobs available there
 * Route: /companies/:handle
 */

const CompanyDetail = () => {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      const comp = await JoblyApi.getCompany(handle);
      setCompany(comp);
    };

    getCompany();
  }, [handle]);

  if (!company) return <LoadingSpinner />;

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      {company.logoUrl && (
        <img className="mb-2" src={company.logoUrl} alt={company.handle} />
      )}
      <h4>{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
