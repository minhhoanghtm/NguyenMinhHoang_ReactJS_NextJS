import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h3>useCallback</h3>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </>
  );
}
