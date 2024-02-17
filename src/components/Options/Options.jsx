export default function Options({ children, updateFeedback, totalFeedback }) {
  return <button onClick={updateFeedback}>{children}</button>;
}
