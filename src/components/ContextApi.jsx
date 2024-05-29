import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

let ApiData = createContext();

function ContextApi({ children }) {
  // for calling api
  const [info, setInfo] = useState([]);

  useEffect(() => {
    let getData = () => {
      axios.get("https://dummyjson.com/products").then((res) => {
        setInfo(res.data.products);
      });
    };
    getData();
  }, []);
  return <ApiData.Provider value={info}>{children}</ApiData.Provider>;
}

export { ContextApi, ApiData };
