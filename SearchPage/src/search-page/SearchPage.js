import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchAds from "./SearchAds";
const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAds = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fetchAds();
  }, [query]);

  return (
    <div className="SearchPage">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Search App</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: 2,
            marginTop: 20,
            marginBottom: 20,
            width: 400,
            height: 30,
          }}
        />
      </div>

      <SearchAds data={data} />
    </div>
  );
};

export default SearchPage;
