import JobCard from "./JobCard";

/** Display list of job cards:
 *
 * used by JobList and CompanyDetails
 *
 * gets apply func prop to be called by jobcards on user applicaiton
 */

const JobCardList = ({ jobs }) => {
  console.debug("JobCardList", "jobs=", jobs);
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          companyName={j.companyName}
        />
      ))}
    </div>
  );
};

export default JobCardList;
