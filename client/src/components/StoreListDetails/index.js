import React from 'react';

export default function StoreListDetails(props){

  return(
    <div className="storeListDetails">
    {console.log('list details', props.info.stores)}
    {props.info.map((i)=>(
      <div>
      {i.name}
       </div>
    ))}

    </div>
  )

}
