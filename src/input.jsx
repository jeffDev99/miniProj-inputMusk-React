import styles from "./Input.module.css"
const Input = ({handleChange, hint , inputValue}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={styles.input} >
        {hint}
      </label>
      <input
        type="text"
        id={styles.input}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
