import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DiscountBadge from "./DiscountBadge";
import "./Product.css";

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <li className="product">
      <div className="card">
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <DiscountBadge
              className="badge"
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <h2 className="product-name">{name}</h2>
        <p className="product-price">Price {price}</p>
        <p className="product-description" data-testid="product-description">
          {description}
        </p>
        <button aria-label="Add to Cart" className="button">
          <span className="button-content">
            <span className="icon-cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <span className="button-text">Add to Cart</span>
          </span>
        </button>
      </div>
    </li>
  );
};

export default Product;
