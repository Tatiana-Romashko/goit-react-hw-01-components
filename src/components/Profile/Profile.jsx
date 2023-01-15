
import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';


const Profile = ({ avatar, username, tag, location, stats: { followers, views, likes } }) => {
   return (
      <div
       className={styles.profile}>
      <div
        className={styles.description}>
        <img
          src={avatar||"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
    <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{likes}</span>
    </li>
        </ul>
        </div>
    );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;


