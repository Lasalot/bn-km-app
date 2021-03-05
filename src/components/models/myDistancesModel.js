import React from "react";


function Distances(entries) {
  return (
   <div>
<h1>{entries.who} {entries.mode} {entries.kilometers} {entries.steps}km {entries.time}</h1>
   </div>
  );
}

export default Distances;
