import { Work } from "./components/pages/Work";
import { Impact } from "./components/pages/Impact";
import { About } from "./components/pages/About";
import { LetsTalk } from "./components/pages/LetsTalk";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout
      >
        <Work />
        <Impact />
        <About />
        <LetsTalk />
      </Layout>
    </>
  );
}

export default App;
