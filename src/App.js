import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import extracurricular from "./images/extracurricular.jpg";

function App() {
  return (
   <>
      <div><TopBar /></div>
        
      
      <div className="cards_container">
     
        <Card
          src="https://wallpapercave.com/wp/wp4056410.jpg"
          title="A Netflix original series"
          sname="DARK"
          link="https://www.youtube.com/watch?v=rrwycJ08PSA"
        />
        <Card
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
        />
      </div>
      </>
  );
}

export default App;
