import React, { useEffect, useState } from "react";

// The useEffect hook in React is used to handle side effects in functional components. Side effects include tasks such as data fetching, subscriptions, manual DOM manipulation, and other operations that interact with the outside world.

const Effect = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async (l, s) => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/users?limit=${l}&skip=${s}`,
          { signal }
        );
        const data = await res.json();

        if (data && data.users.length > 0) {
          setData(data.users);
          setTotalUsers(data.total);
        } else {
          setErrors("No users found.");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch request was aborted.");
        } else {
          console.error("An error occurred:", error);
          setErrors("Failed to fetch users. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(limit, skip);

    return () => {
      // Abort the fetch request on cleanup
      controller.abort();
    };
  }, [limit, skip]);

  // handle previous
  const handlePrev = () => {
    if (skip >= limit) {
      setSkip((prev) => prev - limit);
    }
  };

  // handle next
  const handleNext = () => {
    if (skip + limit < totalUsers) {
      setSkip((prev) => prev + limit);
    }
  };

  // Calculate the current page number
  const currentPage = Math.floor(skip / limit) + 1;

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (errors)
    return (
      <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
        <h2 className="text-danger">{errors}</h2>
      </div>
    );

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1">
        <div className="row">
          <h1 className="text-center">Users</h1>
          <div className="col-12">
            <table className="table table-bordered table-hover table-light">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i) => (
                  <tr key={i.id}>
                    <th>{i.id}</th>
                    <td>{i.firstName}</td>
                    <td>{i.lastName}</td>
                    <td>{i.phone}</td>
                    <td>{i.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="mt-auto">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${skip === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handlePrev}>
                Previous
              </button>
            </li>
            {[...Array(Math.ceil(totalUsers / limit)).keys()].map((page) => (
              <li
                key={page + 1}
                className={`page-item ${
                  page + 1 === currentPage ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setSkip(page * limit)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                skip + limit >= totalUsers ? "disabled" : ""
              }`}
            >
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Effect;
