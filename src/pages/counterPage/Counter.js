import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8"
      >
        Increment
      </button>

      <div className="mb-8 text-clip">{count}</div>

      <button
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
