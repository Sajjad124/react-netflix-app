import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import Sdata from "./Sdata";

const App = () =>{
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
}

export default App;
