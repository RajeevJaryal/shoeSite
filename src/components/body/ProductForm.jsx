import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

import { generateDescription } from "../../ai/gemini";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [sizeS, setSizeS] = useState("");
  const [sizeM, setSizeM] = useState("");
  const [sizeL, setSizeL] = useState("");

  const [loading, setLoading] = useState(false);

  const generateAIHandler = async () => {
    if (!name) {
      alert("Please enter shoe name first");
      return;
    }

    setLoading(true);
    const aiText = await generateDescription(name);
    setDescription(aiText);
    setLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
      sizes: {
        S: Number(sizeS),
        M: Number(sizeM),
        L: Number(sizeL),
      },
    };

    addProduct(newProduct);

    // Reset form
    setName("");
    setDescription("");
    setPrice("");
    setSizeS("");
    setSizeM("");
    setSizeL("");
  };

  return (
    <section className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h5 className="text-center mb-3 fw-semibold">
                Add New Shoe
              </h5>

              <form onSubmit={submitHandler}>
                {/* Shoe Name */}
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Shoe Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nike Air Max"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-2">
                  <label className="form-label small fw-semibold">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>

                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm mt-2"
                    onClick={generateAIHandler}
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Generate with AI"}
                  </button>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1999"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                {/* Sizes */}
                <div className="mb-3">
                  <label className="form-label small fw-semibold">
                    Stock Quantity
                  </label>

                  <div className="row g-2">
                    <div className="col-4">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">S</span>
                        <input
                          type="number"
                          className="form-control"
                          value={sizeS}
                          onChange={(e) => setSizeS(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">M</span>
                        <input
                          type="number"
                          className="form-control"
                          value={sizeM}
                          onChange={(e) => setSizeM(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">L</span>
                        <input
                          type="number"
                          className="form-control"
                          value={sizeL}
                          onChange={(e) => setSizeL(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="d-grid mt-3">
                  <button className="btn btn-dark" type="submit">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
