import React from "react";


function Distances(entries) {

  return (
<tr class="classTrBody">
<td class="classTd">{entries.who}</td>
<td class="classTd dark">{entries.mode}</td>
<td class="classTd dark2">{entries.kilometers}km</td>
<td class="classTd dark3">{entries.time}</td>

</tr>
  );
}

export default Distances;
