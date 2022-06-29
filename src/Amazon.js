import React from "react";
import { Card } from "./Card";
import Sdata from "./Sdata";

const Amazon = ()=>{
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
export default Amazon;
