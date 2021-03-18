import React from "react";


function Distances(entries) {
  const kilometers = parseFloat(entries.kilometers).toFixed(2)
  return (
<tr className="classTrBody">
<td className="classTd">{entries.who}</td>
<td className="classTd dark">{entries.mode}</td>
<td className="classTd dark2">{kilometers}km</td>
</tr>
  );
}

export default Distances;
