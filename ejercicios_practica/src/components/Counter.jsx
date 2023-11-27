import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementCount () {
        setCount(count + 1);
    }

    function decrementCount () {
        setCount(count - 1);
    }

  return (
    <>
    <h2>Count: {count}</h2>
    <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount} disabled={count<1}> - </button>
    </div>
    </>
  )
}

export default Counter