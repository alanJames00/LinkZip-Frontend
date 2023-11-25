import Layout from "./Layout";
import HomePage from "@/components/HomePage";
import ShortenUrl from './components/ShortenUrl'

function App() {
  return (
    <Layout>
      <HomePage />
      <ShortenUrl />
    </Layout>
  );
}

export default App;
