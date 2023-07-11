import { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import LoadingSpinner from "../common/LoadingSpinner";

/** Page with list of companies:
 *
 * on mount, loads companies from api
 * reloads filtered companies on searchform submit
 *
 *  Route: /companies
 */

const CompanyList = () => {
  console.debug("CompanyList");

  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    console.debug("CompanyList useEffect GETCOMPANIES");
    search();
  }, []);

  // func passed down as prop, triggered by searchform submit
  const search = async (name) => {
    const companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  };

  if (!companies) return <LoadingSpinner />;

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results have been found!</p>
      )}
    </div>
  );
};

export default CompanyList;
