import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countState, countSelector } from "./Count";

export default function Input() {
  const setCount = useSetRecoilState(countState);
  const countStr = useRecoilValue(countSelector);
  const countNum = useRecoilValue(countState);

  return (
    <div>
      <input onChange={(e) => setCount(e.target.value)} type="number" />
      <br />
      countState의 타입: {typeof countNum}
      <br />
      countSelector의 타입: {typeof countStr}
    </div>
  );
}
