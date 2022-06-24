import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import extracurricular from "./images/extracurricular.jpg";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div className="cards_container">
        {/* fat arrow function */}
        {Sdata.map((value, index) => {
          return (
            <Card
              src={value.src}
              title={value.title}
              sname={value.sname}
              link={value.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
