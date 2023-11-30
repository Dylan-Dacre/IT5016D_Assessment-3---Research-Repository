import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ products, className }) => {
  return (
    <div className={`product-list-container ${className}`}>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageName={product.imageName}
            imageDescription={product.imageDescription}
            discountValue={product.discountValue}
            discountType={product.discountType}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
