
import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';


const FriendList = ({ friends }) => (
        <ul className={styles.friends_list}>
            {friends.map(({avatar,name, isOnline, id }) => (
                <li className={styles.item} key={id}>
                    <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
                    <img src={avatar||"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
      ))}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
}
export default FriendList;


