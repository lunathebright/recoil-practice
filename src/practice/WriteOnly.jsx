import React from "react";
import { useSetRecoilState } from "recoil";
import { countState } from "./Count";

export default function WriteOnly() {
  const handleRecoilState = useSetRecoilState(countState);

  return (
    <div>
      <span>Write Only Component</span>
      <button onClick={() => handleRecoilState((prev) => prev - 1)}>-</button>
      <button onClick={() => handleRecoilState((prev) => prev + 1)}>+</button>
    </div>
  );
}
