import { sizeWidth, style } from "@mui/system";
import React from "react";

const seasonConfig={
    summer:{
        text:"Lets hit the Beach",
        iconName:"sun",
    },
    winter:{
        text:"Burr its chilly",
        iconName:"snowflake",
    }
};

const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ? "summer" :"winter";
    }
    else{
        return lat>0 ? "winter": "summer";
    }
}
const SeasonDetails=(props)=>{

    const season= getSeason(props.lat,new Date().getMonth());
const {text,iconName}=seasonConfig[season];
    return(
         <div>

             <i className={`${iconName} icon`}  />
<h2>{text}</h2>
<i className={`${iconName} icon`} />
    </div>
    );
}

export default SeasonDetails;