import React from "react";


function OverallDistancesModel(entries) {
  return (
   <tbody>
<tr class="classTrBody">
<td class="classTd">{entries.who}</td>
<td class="classTd dark">{entries.mode}</td>
<td class="classTd dark2">{entries.kilometers}km</td>
<td class="classTd dark3">{entries.time}</td>

</tr>

   </tbody>
  );
}

export default OverallDistancesModel;
