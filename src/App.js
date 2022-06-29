import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import Sdata from "./Sdata";

const favSeries = "Netfli";

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
    return (
      <Card
        key={Sdata[0].id}
        src={Sdata[0].src}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
    );
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
