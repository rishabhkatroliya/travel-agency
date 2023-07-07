import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OurWorldDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [property, setProperty] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:8080/property/${id}`);
    setProperty(res.data);
  };
  return (
    <div>
      {" "}
      <h1>{property.title}</h1>
    </div>
  );
};

export default OurWorldDetails;
