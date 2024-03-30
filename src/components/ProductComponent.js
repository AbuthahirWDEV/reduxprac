import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProductComponent = () => {
  // Get the products from the redux store
  const products = useSelector((state) => state.allProducts.products);
  // Set the selected product to null
  const [selectedProduct, setSelectedProduct] = useState(null);
  // A function to handle the selected product
  const handleSelectedProduct = (id) => {
    setSelectedProduct(id);
  };
  // If a product is selected, navigate to the product detail page
  if (selectedProduct !== null) {
    return <Navigate to={`/product/${selectedProduct}`} />;
  }
  // A function to show the product list
  const renderProductList = products.map((product) => {
    // Destructure the product object
    const { id, title, image, price, category } = product;

    return (
      // Show the product in a card
      <div style={{ marginTop: "20px" }} key={id}>
        <div className="four wide column" >
          <div
            className=" ui link cards"
            onClick={() => handleSelectedProduct(id)}
          >
            <div className="card">
              <div className="image" style={{ margin: "4px" }}>
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // Return the product list
  return <>{renderProductList}</>;
};

export default ProductComponent;
