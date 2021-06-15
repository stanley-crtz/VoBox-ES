import { useEffect, useState } from "react";
import Firebase from "../Class/Firebase";

export const useGetActivitys = () => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    Firebase.__getOrder("Activitys")
      .then((data) => setState({ loading: false, data, error: null }))
      .catch((err) => {
        setState({ loading: false, data: [], error: true });
        console.log(err);
      });
  }, []);

  return [state.loading, state.data, state.error];
};
