import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import "./DiscountBadge.css";

const DiscountBadge = ({ discountType, discountValue, className }) => {
  return (
    <div className={`${className || ""} discountBadge`} data-testid="badge">
      {discountType === "percentage off" && (
        <>
          <FontAwesomeIcon icon={faTag} />
          {discountValue} % off
        </>
      )}
      {discountType === "fixed amount off" && (
        <>
          <FontAwesomeIcon icon={faTag} />$ {discountValue} off
        </>
      )}
    </div>
  );
};

export default DiscountBadge;
