import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UseEffectExample2 = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [page, setPage] = useState(1);
  const abortControllerRef = useRef(null);

  const fetchPosts = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setErrors("");
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        {
          signal: controller.signal,
        }
      );
      console.log(response.data.products);
      if (response.data && response.data.products.length > 0)
        setProducts(response.data.products);
      setErrors("");
    } catch (error) {
      console.error("Products cannot be fetched: ", error);
      if (error.name !== "CanceledError") {
        setErrors("Failed to fetch user data.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSkip((page - 1) * limit); // Update skip based on current page
    fetchPosts();

    // Cleanup function to abort ongoing request when component unmounts or before re-running the effect
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [page, limit]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(100 / limit); // Assuming a total of 100 products for this example

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Product Listings</h1>

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {errors && <div className="alert alert-danger">{errors}</div>}

          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card border-light shadow-sm">
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      <strong>Price:</strong> ${product.price}
                    </p>
                    <p className="card-text">
                      <strong>Brand:</strong> {product.brand}
                    </p>
                    <p className="card-text">
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> {product.rating}{" "}
                      <span className="text-warning">⭐</span>
                    </p>
                    <p className="card-text">
                      <strong>Stock:</strong> {product.stock}{" "}
                      <span
                        className={`badge ${
                          product.stock > 10 ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {product.stock > 10 ? "In Stock" : "Low Stock"}
                      </span>
                    </p>
                    <p className="card-text">
                      <strong>Discount:</strong> {product.discountPercentage}%
                    </p>
                    <p className="card-text">
                      <strong>Return Policy:</strong> {product.returnPolicy}
                    </p>
                    <p className="card-text">
                      <strong>Shipping Information:</strong>{" "}
                      {product.shippingInformation}
                    </p>
                    <p className="card-text">
                      <strong>Warranty Information:</strong>{" "}
                      {product.warrantyInformation}
                    </p>
                    <p className="card-text">
                      <strong>SKU:</strong> {product.sku}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <nav aria-label="Page navigation" className="fixed-bottom bg-light py-2">
        <ul className="pagination justify-content-center mb-0">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
              disabled={page === 1}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((number) => (
            <li
              key={number + 1}
              className={`page-item ${page === number + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() =>
                handlePageChange(page < totalPages ? page + 1 : totalPages)
              }
              disabled={page === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UseEffectExample2;
