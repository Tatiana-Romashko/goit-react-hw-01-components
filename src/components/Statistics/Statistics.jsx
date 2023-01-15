
import React from 'react';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';


const Statistics = ({ title, stats }) => {
   return (
      <section className={styles.statistics}>
           <h2 className={styles.title}>{title}</h2>
           <ul className={styles.stat_list}>
            {stats.map(({id,label,percentage}) => (
                <li className={styles.item} style={{
                            backgroundColor: getRandomHexColor()
                        }} key={id}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
                </li>
      ))}
    </ul>
</section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),),
};

export default Statistics;


