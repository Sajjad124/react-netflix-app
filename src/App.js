import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import extracurricular from "./images/extracurricular.jpg";
import Sdata from "./Sdata";

// console.log(Sdata[0]);
function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div className="cards_container">
        <Card
          src={Sdata[0].src}
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].link}
        />
        <Card
          src={Sdata[1].src}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
        />
        <Card
          src={Sdata[2].src}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
        />


        {/* <Card
          src={extracurricular}
          title="A Netflix original series"
          sname="Extra Curricular"
          link="https://www.youtube.com/watch?v=aV_DBz2rKsI"
        />
        <Card
          src="https://wallpapercave.com/wp/wp1917154.jpg"
          title="A Netflix original series"
          sname="Stranger Things"
          link="https://www.youtube.com/watch?v=b9EkMc79ZSU"
        /> */}
      </div>
    </>
  );
}

export default App;
