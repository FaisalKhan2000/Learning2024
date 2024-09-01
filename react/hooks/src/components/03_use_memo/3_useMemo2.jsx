import React, { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 699 },
  { id: 3, name: "Tablet", price: 499 },
  // Add more products as needed
];

function ProductList() {
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Memoize the filtered and sorted products
  const filteredAndSortedProducts = useMemo(() => {
    // Step 1: Filter products based on filterText
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    // Step 2: Sort the filtered products
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return sortedProducts;
  }, [filterText, sortOrder]);

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Filter products"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <ul className="list-group">
        {filteredAndSortedProducts.map((product) => (
          <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{product.name}</span>
            <span className="badge bg-success rounded-pill">
              ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
