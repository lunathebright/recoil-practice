import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "./Count";

export default function ReadOnly() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <span>Read Only Component</span>
      <div>count: {count}</div>
    </div>
  );
}
