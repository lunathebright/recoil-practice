import { RecoilRoot } from "recoil";
import ReadOnly from "./ReadOnly";
import ReadWrite from "./ReadWrite";
import WriteOnly from "./WriteOnly";

function App() {
  return (
    <RecoilRoot>
      <ReadWrite />
      <br />
      <WriteOnly />
      <br />
      <ReadOnly />
    </RecoilRoot>
  );
}

export default App;
