import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return data;
};

export default useData;
