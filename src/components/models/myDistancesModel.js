import React from "react";


function Distances(entries) {

  return (
  <tbody>

<tr>
<td>{entries.who}</td>
<td>{entries.mode}</td>
<td>{entries.kilometers} {entries.steps}km</td>
<td>{entries.time}</td>

</tr>
  </tbody>
  );
}

export default Distances;
