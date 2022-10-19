import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CreateProductForm = () => {
    const [productTypes, setProductTypes] = useState([]);
    const [userChoices, setUserChoices] = useState([
        { name: "", productTypeId: 0, pricePerUnit: 0 },
    ]);
    
    const saveKandy = (event) => {
      event.preventDefault()
      
      if (userChoices.name && userChoices.productTypeId && userChoices.pricePerUnit)
      fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userChoices)
      })
      .then()
    };

  useEffect(() => {
    fetch(`http://localhost:8088/productTypes`)
      .then((response) => response.json())
      .then((productArray) => {
        setProductTypes(productArray);
      });
  }, []);

  return (
    <form className="product-form">
      <h2 className="product-form-title">Add New Product</h2>
      <h4 className="product-form-subhead">All fields required</h4>

      <fieldset>
        <div className="form-group">
          <label htmlFor="product-name" className="product-form-label">
            Product name
          </label>
          <input
            type="text"
            id="product-name"
            value={userChoices.name}
            placeholder="example: Potato Puffs"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.name = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <div>Product type</div>
          {productTypes.map((productType) => {
            return (
              <div key={productType.id} className="product-form-radio">
                <label>
                  <input
                    type="radio"
                    value={productType.id}
                    required
                    checked = {userChoices.productTypeId === productType.id}
                    onChange={(event) => {
                      const copy = { ...userChoices };
                      copy.productTypeId = parseInt(event.target.value);
                      setUserChoices(copy);
                    }}
                  />
                  {productType.type}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="product-price" className="product-form-label">
            Price per Unit
          </label>
          <input
            type="text"
            id="product-price"
            placeholder="example: 2.95"
            required
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.pricePerUnit = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>
      <Link to="/products">
      <button
        className="product-form-button"
        onClick={(event) => {
          saveKandy(event);
        }}
      >
        Add to Directory
      </button>
      </Link>
    </form>
  );
};
