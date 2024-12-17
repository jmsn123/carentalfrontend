import React, { useEffect, useState } from "react";

import axios from "axios";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((response) => setCars(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.model} - ${car.pricePerDay} per day ({car.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;
