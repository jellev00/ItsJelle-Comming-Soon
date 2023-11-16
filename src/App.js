import './App.scss';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="infoContainer">
        <h1 className="name">ItsJelle</h1>
        <p className="subTitle">Beginner Frontend Developer & Backend Developer</p>
        <div className="commingSoon">
          <p className="text">Comming Soon</p>
          <ul className="loadingDots">
            <li className="dots"></li>
            <li className="dots"> </li>
            <li className="dots"> </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
