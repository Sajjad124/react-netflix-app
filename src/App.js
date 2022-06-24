import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import { TopBar } from "./TopBar";
import extracurricular from "./images/extracurricular.jpg";
import Sdata from "./Sdata";

// console.log(Sdata[0]);
// there are three parameters of map function array.map(function(currentvalue,index,array))
// function NetflixCard(value) {
//   console.log(value);
//   return (
//     <Card
//       src={value.src}
//       title={value.title}
//       sname={value.sname}
//       link={value.link}
//     />
//   );
// }
function App() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div className="cards_container">
        {/* fat arrow function */}
        {Sdata.map((value,index)=> {

          return (
            <Card
              src={value.src}
              title={value.title}
              sname={value.sname}
              link={value.link}
            />
          );
        })}
        {/* commented to use the map function on just one card to avoid repititon in code */}
        {/* <Card
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
        /> */}
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



// function myname(Sajjad){
//   return Sajjad;
// }
// let a = 10;
// let b = 10;
// const name = (a,b) =>  a+b; //for single line of code there is no need to add curly parenthesis