import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Display info about company
 *
 * Rendered by CompanyList to present card for each company
 *
 *  CompanyList -> CompanyCard
 */

const CompanyCard = ({ name, description, logoUrl, handle }) => {
  console.debug("CompanyCard", name, logoUrl);
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title">
          {name}
          {logoUrl && (
            <img src={`${logoUrl}`} alt={name} className="float-right ml-5" />
          )}
        </h6>
        <p className="card-desc">
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;
