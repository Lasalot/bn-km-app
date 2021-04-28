import axios from "axios";
import React from "react";
import swal from "sweetalert2";
import { StyledSpan } from "../styledComps";


function Distances(entries) {
  const kilometers = parseFloat(entries.kilometers).toFixed(2)
  const Delete = () => {

swal.fire({
  title:"Delete this entry?",
  text:`You are about to delete the entry of : ${entries.mode} ${kilometers}Kms`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes delete it",
  cancelButtonText: "No!"
}).then((result) => {
  if (result.value) {
    axios.delete('https://runzybackend.com/api/distance', {
      params: {
      email: entries.email,
      who: entries.who,
      distance: kilometers,
      id: entries.id,
      mode: entries.mode
      }
    }).then( res => {
      if (res.status != 200) {
        swal.fire("error")
      } else  {
        swal.fire({
          title:"Entry has been deleted",
          icon:"success"
        })
        setTimeout(() => {
          window.location.reload()
            },2000)
      }
    });

  } else if (result.dismiss === swal.DismissReason.cancel) {
    swal.fire({
      title:"Okay request cancelled",
      text: "Entry remained intact",


    })
  }
})



  }


  return (
<tr className="classTrBody">
<td className="classTd">{entries.who}</td>
<td className="classTd dark">{entries.mode}</td>
<td className="classTd dark2">{kilometers}km <StyledSpan onClick={Delete}>🗑️</StyledSpan></td>

</tr>
  );
}

export default Distances;
