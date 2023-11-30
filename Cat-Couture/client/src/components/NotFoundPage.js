import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <main className="narrow-layout main-content section-padding page-padding full-layout">
      <div className="not-found-content">
        <h2>Page Not Found</h2>
        <FontAwesomeIcon icon={faCat} className="icon-cat" />
      </div>
    </main>
  );
};

export default NotFoundPage;
