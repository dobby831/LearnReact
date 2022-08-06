import "./styles.css";
import Footer from "./compornents/Footer";

export default function App() {
  const dispWord = "Hello world!";
  return (
    <div className="App">
      <header className="App-header">
        <h2>{dispWord}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer message={"Useally"} />
    </div>
  );
}
