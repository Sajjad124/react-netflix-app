import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import Sdata from "./Sdata";

const favSeries = "Netflix";

const FavS = () => {
  if (favSeries === "Netflix") {
    return (
      <Card
        key={Sdata[1].id}
        src={Sdata[1].src}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />
    );
  } else {
  }
};

const App = () => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div className="cards_container">
        {/* fat arrow function */}
        {Sdata.map((value, index) => {
          return (
            <FavS/>
          );
        })}
      </div>
    </>
  );
};

export default App;
