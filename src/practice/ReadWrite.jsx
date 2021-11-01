import React from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { countInputState, countState, inputState } from "./Count";

export default function ReadWrite() {
  const [count, setCount] = useRecoilState(countState);
  const [input, setInput] = useRecoilState(inputState);
  const setCountUseRecoil = useSetRecoilState(countState);
  const resetCount = useResetRecoilState(countState);
  const countInput = useRecoilValue(countInputState);

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
}

// {
//   /* <span>Read and Write Component</span>
//       <p>seletor {countInput}</p>
//       <input
//         type="text"
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//       />
//       <div>count: {count}</div>
//       <div>
//         <span>setCount</span>
//         <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//         <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//         <br />
//         <span>setCountUseRecoil</span>
//         <button onClick={() => setCountUseRecoil((prev) => prev - 1)}>-</button>
//         <button onClick={() => setCountUseRecoil((prev) => prev + 1)}>+</button>
//         <br />
//         <button onClick={resetCount}>reset</button>
//       </div> */
// }
