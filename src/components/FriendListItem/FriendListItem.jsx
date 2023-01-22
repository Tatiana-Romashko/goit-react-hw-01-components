import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendListItem/friendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline})=> { return (
                <li className={styles.item}>
                    <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
                    <img className={styles.avatar} src={avatar||"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
)}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem;