export default function Feedback({
  clicks: { good, neutral, bad },
  totalFeedback,
  percentOfPositiveFeedback,
}) {
  return (
    <ul>
      <li>
        <p>Good: {good} </p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {`${percentOfPositiveFeedback}%`}</p>
      </li>
    </ul>
  );
}
