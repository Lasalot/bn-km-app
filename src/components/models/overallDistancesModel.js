import React from "react";


function OverallDistancesModel(entries) {
  return (

<tr className="classTrBody">
<td className="classTd">{entries.who}</td>
<td className="classTd dark">{entries.mode}</td>
<td className="classTd dark2">{entries.kilometers}km</td>


</tr>


  );
}

export default OverallDistancesModel;