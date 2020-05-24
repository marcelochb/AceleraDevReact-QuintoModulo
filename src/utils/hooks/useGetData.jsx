import { useState, useEffect } from "react";

import api from "../services/api";

export const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.get("contacts");
      const data = await response.data;
      setData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return { data, loading };
};
