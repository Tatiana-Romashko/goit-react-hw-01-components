import FriendListItem from '../FriendListItem/FriendListItem';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';


const FriendList = ({ friends }) => {
    return(
    <ul className={styles.friends_list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
        ))}
    </ul>
)}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;


