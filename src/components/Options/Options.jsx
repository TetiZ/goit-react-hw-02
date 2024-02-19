import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  isAnyFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("neutral")}>
          Neutal
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {isAnyFeedback && (
        <li>
          <button className={css.btn} onClick={() => resetFeedback()}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
