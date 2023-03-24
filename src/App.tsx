import "./styles.css";
import Landing from "./Landing";
import Background from "./background";
import Advert from "./advertisement";

export default function App() {
  return (
    <div className="App">
      <Advert />
      <Background />
      <Landing />
    </div>
  );
}
