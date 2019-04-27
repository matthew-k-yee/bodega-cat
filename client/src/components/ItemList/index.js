import React from 'react';
import './index.css';

export default function Item(props) {
  return (
    <div  className="Item">
      {/* <img onClick={props.onChange} alt={props.vendor.name} src={props.vendor.img_url}/>
      <h3 onClick={props.onChange}>{props.vendor.name.toUpperCase()}</h3>
      {props.isFavorite ?
      <span><input className="favebutton" name={props.vendor.id} type="button" value="Remove from Favorites" onClick={props.unfavoriteVendor}/></span> :
      <span><input className="favebutton" name={props.vendor.id} type="button" value="Add to Favorites" onClick={props.favoriteVendor}/></span>}
      {props.creator ?
      <input type="text" name={props.vendor.id} placeholder="update image url" className="update-input" onKeyUp={props.update}/>: null}
      {props.creator ?
      <button className="exit" value={props.vendor.id} onClick={props.delete}>🗑</button>: null} */}
      <h3>item name</h3>
      <span>span 1</span>
      <span>span 2</span>
      <button>add</button>
    </div>
  )
}