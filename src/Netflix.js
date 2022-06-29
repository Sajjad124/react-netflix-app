import React from "react";
import { Card } from "./Card";
import Sdata from "./Sdata";

const Netflix = () => {
  return (
    <Card
      key={Sdata[1].id}
      src={Sdata[1].src}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
  );
};
export default Netflix;
