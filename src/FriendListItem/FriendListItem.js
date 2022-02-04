import propTypes from 'prop-types';
import React from "react";
import s from "./FriendListItem.module.css"


function FriendListItem({ id, avatar, name, isOnline }) {
    console.log(id);
    return (
        <li className="item" key={id}>
            {isOnline?<span className={s.true} >row</span>:<span className={s.false}>row</span>}
  
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p></li>
        
    )
}

FriendListItem.propTypes = {
                avatar: propTypes.string,
                name: propTypes.string,
                currency:propTypes.bool
           
}





export default FriendListItem;

