
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </>
  );
}

export default App;
