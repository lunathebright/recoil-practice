import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "./Count";

export default function Text() {
  const count = useRecoilValue(countState);
  return <div>총 카운트 수는 {count}입니다.</div>;
}
