import { useEffect, useState } from "react";

export const useContador = (init = 1) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(init);
  }, [init]);

  const Aumentar = () => {
    if (state + 1 <= 18) setState(state + 1);
  };

  const Decrementar = () => {
    if (state - 1 >= init) setState(state - 1);
  };

  const Reset = () => setState(init);

  return [state, Aumentar, Decrementar, Reset];
};
