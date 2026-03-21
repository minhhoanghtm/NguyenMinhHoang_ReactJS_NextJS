import { useReducer } from "react";

function reducer(state, action) { //state: giá trị hiện tại || action: hành động để gửi dispatch
  switch (action.type) {
    case "INC": return state + 1;
    case "DEC": return state - 1;
    default: return state;
  }
}

export default function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);
  //count: state hiện tại
  //dispatch: gửi action
  //reducer: xử lyus logic
  //0: giá trị ban đầu
  return (
    <>
      <h3>useReducer</h3>
      <div style={{display: "flex"}}>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {/* DEC: giảm */}
        <p>{count}</p>
      <button onClick={() => dispatch({ type: "INC" })}>+</button> 
      {/* INC: tăng */}
      </div>
    </>
  );
}
