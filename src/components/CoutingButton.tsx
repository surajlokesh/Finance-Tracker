import { useState } from "react";

function CountingButton() {
  const [count, setCount] = useState(0);
  let nmber = 0;

  const addCount = () => {
    setCount(count + 1);
    nmber++;
    console.log(nmber);
    console.log(count);
  };
  return (
    <>
      <h2> Count Button</h2>
      <button className="btn btn-primary" onClick={addCount}>
        count is {count}
      </button>
    </>
  );
}

export default CountingButton;
