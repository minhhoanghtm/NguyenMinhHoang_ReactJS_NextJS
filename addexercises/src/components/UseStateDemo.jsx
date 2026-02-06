import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0); // set giá trị hiện tại là 0

  return (
    <>
      <h3>Demo useState</h3>
      <div style={{display: "flex"}}>
      {/* hàm setCount để thay đổi giá trị */}
      <button style={{border: "solid"}} onClick={() => setCount(count - 1)}>-</button> 
      <p style={{padding: "10px"}}>Giá trị hiện tại {count}</p>
      <button style={{border: "solid"}} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}
