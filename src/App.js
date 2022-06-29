import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import Sdata from "./Sdata";

const favSeries = "Netflix";

const FavS = () => {
  if (favSeries === "Netflix") {
    return (
      <Card
        key={Sdata[0].id}
        src={Sdata[0].src}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
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
            <Card
              key={value.id}
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
};

export default App;
