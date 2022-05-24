import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} key={id} style={{backgroundColor: generateColor()}}>
              <span className={s.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
