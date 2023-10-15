import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => { 
function bgColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  };

  return (
<section className={css.statistics}>
  {title && <h2 className={css.title}>Upload stats</h2>}
          <ul className={css.statList}>
              {stats.map(data => (
                  <li key={data.id} className={css.item} style={{backgroundColor: bgColor()}}>
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}</span>
    </li>      
))}
  </ul>
</section>
  );
};

export default Statistics;