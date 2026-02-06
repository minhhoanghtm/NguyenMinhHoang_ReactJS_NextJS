import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null); //tạo 1 project

  return (
    <>
      <h3>useRef</h3>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </>
  );
}
