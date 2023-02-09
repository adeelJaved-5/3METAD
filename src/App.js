import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="font-montserrat box-border overflow-x-hidden bg-black text-white">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
