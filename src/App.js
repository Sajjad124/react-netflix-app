import "./App.css";
// import { Card } from "./Card";
import { TopBar } from "./TopBar";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Amazon";
const FavS = () => {
  if (favSeries === "Netflix") {
    return <Netflix />;
  } else {
    return <Amazon />;
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
          return(
           <FavS/>
          )
        })}
      </div>
    </>
  );
};

export default App;
