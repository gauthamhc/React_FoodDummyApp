import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
