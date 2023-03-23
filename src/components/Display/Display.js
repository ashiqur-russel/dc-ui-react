import React from "react";
const Display = (props) => {
    return ( 

     <div>
           <div>Name:{props.name}</div>
        <p>So far steps today:{props.steps}</p>
     </div>
     );
}
 
export default Display ;