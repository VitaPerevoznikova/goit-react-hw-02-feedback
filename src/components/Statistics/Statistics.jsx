import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.listItem}>
        <li className={css.feedbackResult}>Good: {good}</li>
        <li className={css.feedbackResult}>Neutral: {neutral}</li>
        <li className={css.feedbackResult}>Bad: {bad}</li>
      </ul>
      <p className={css.feedbackResult}>Total: {total}</p>
      <p className={css.feedbackResult}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};