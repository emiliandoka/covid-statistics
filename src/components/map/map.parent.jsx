import React, { useState  }from "react";
import ReactTooltip from "react-tooltip";
//import MapChart from "./map.comp";
import './map.comp.style.scss';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

 /* function RGBAToHexA(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
  } 
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });*/

const MapChart = ( setTooltipContent , props , handleclick , dontshowno ) => {
 
  return (
    
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
               var value,index; let opacity=0;
               for(var i=0;i<props.length;i++){
                 if(props[i].Country === geo.properties.NAME|| 
                  props[i].Country=== geo.properties.NAME_LONG || props[i].Country=== geo.properties.FORMAL_EN){
                  value = props[i].TotalConfirmed; index = i;
                  break; }
                 }
                 if(value===undefined){opacity=0; value= 0;}
                 if(value<1000){opacity=0.1}
                 else if(value<180000){opacity=0.3}
                 else if(value<500000){opacity=0.7}
                 else{opacity=1}
               return (<Geography
                  key={geo.rsmKey}
                  data-index={index}
                  
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME} = geo.properties;
                    setTooltipContent(`${NAME} ${dontshowno ? '' : `— ${value}`}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: `#2E86C1`,
                      outline: "#D6EAF8",
                      stroke: '#21618C',
                      fillOpacity: `${opacity}`
                    },
                    hover: {
                      fill: "#154360",
                      outline: "#1C2833"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "#212F3C"
                    }
                  }}
                  onClick={(e)=>handleclick(e)}/> )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    
  );
};


const Mapp =(props) => {
    const [content, setContent] = useState("");
    return (
      <div className="Map"> 
        <span className="drag"><i className="far fa-hand-rock"></i> to move map</span>
        {MapChart(setContent , props.data , props.handleclick, props.dontshowno)}
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }


export default Mapp;