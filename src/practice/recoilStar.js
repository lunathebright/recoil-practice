import { selector } from "recoil";

export const recoilStarSelector = selector({
  key: "recoilStarState",
  get: async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    );
    const parsedResponse = await response.json();
    return parsedResponse["stargazers_count"];
  },
});
