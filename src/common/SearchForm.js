import { useState } from "react";
import "./SearchForm.css";

/** Search:
 *
 * Is displayed on companylist and joblist pages so that results may be filtered
 *
 * SearchForm component doesn't do searching, but renders search form and calls searchFor func prop in parent to perform search
 */

const SearchForm = ({ searchFor }) => {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="SearchForm mb-4">
      <form onSubmit={handleSubmit} className="form-inline">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search term..."
          value={searchTerm}
          onChange={handleChange}
          className="form-control form-control-lg flex-grow-1 mb-2"
        />
        <button className="btn btn-lg btn-info" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
