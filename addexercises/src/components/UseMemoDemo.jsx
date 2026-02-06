import { useMemo } from "react";

export default function UseMemoDemo() {
  //useMomo: ghi nhớ kết quả
  const numbers = [1, 2, 3, 4, 5];

  const total = useMemo(() => {
    console.log("Calculating...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]); // chỉ khi nào numbers thay đổi mới được log và được tính lại

  return (
    <>
      <h3>useMemo</h3>
      <p>Total: {total}</p>
    </>
  );
}
