import { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

/** Display page with jobs list
 *
 * on mount, load jobs from API
 * reloads filtered jobs on search form submission
 *
 * JobList -> JobCardList -> Jobcard
 *
 * Route: /jobs
 */

const JobList = () => {
  console.debug("JobList");
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    console.debug("JobList useEffect");
    search();
  }, []);

  // triggered by search form submission
  const search = async (title = undefined) => {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  };

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="lead">Sorry, no jobs were found.</p>
      )}
    </div>
  );
};

export default JobList;
