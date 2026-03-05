import { useState, useEffect } from "react";

export const useGet = (end) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://dummyjson.com${end}`);
        const res = await response.json();
        setData(res.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return { data };
};