import React from "react";


function OverallDistancesModel(entries) {
  const kilometers = parseFloat(entries.kilometers,4)
  return (

<tr className="classTrBody">
<td className="classTd">{entries.who}</td>
<td className="classTd dark">{entries.mode}</td>
<td className="classTd dark2">{kilometers}km</td>


</tr>


  );
}

export default OverallDistancesModel;
