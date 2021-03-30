import React from "react";


function AdminAreaModel(entries) {
  const kilometers = parseFloat(entries.kilometers).toFixed(2)
  const dateTime = new Date (entries.date_created).toLocaleDateString()

  return (

<tr className="classTrBody">
<td className="classTd">{entries.who}</td>
<td className="classTd dark">{entries.mode}</td>
<td className="classTd dark2">{kilometers}km</td>
<td className="classTd dark2">{dateTime}</td>
</tr>


  );
}

export default AdminAreaModel;
