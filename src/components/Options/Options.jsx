import css from "./Options.module.css";

export default function Options({ children, updateFeedback, resetFeedback }) {
  return (
    <button
      className={css.btn}
      onClick={updateFeedback ? updateFeedback : resetFeedback}
    >
      {children}
    </button>
  );
}
