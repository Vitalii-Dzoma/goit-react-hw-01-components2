import friends from "../friends.json"
import propTypes from 'prop-types';
import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"

function FriendList({friends}) {
return (
    <ul className="friend-list">
        {friends.map(friend => (
            
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
        />
          
        ))

        }
        
</ul>
    )
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.number.isRequired,           
            }
        )
    )
}

export default FriendList;