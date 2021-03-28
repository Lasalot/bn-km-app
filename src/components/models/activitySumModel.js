import React from "react";


function ActivitySum(entries) {
  const kilometers = parseFloat(entries.kilometers).toFixed(2)
  return (

<tr className="classTrBody">
<td className="classTd">{entries.rowNumber}.</td>
<td className="classTd">{entries.activity_type}</td>
<td className="classTd dark2">{kilometers}km</td>


</tr>


  );
}

export default ActivitySum;
