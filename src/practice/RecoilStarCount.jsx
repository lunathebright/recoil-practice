import React from "react";
import { useRecoilValue } from "recoil";
import { recoilStarSelector } from "./recoilStar";

export default function RecoilStarCount() {
  const recoilStars = useRecoilValue(recoilStarSelector);
  return <div>recoil github star: {recoilStars}</div>;
}
