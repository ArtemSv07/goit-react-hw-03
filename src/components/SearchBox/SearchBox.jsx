import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        type="text"
      />
    </div>
  );
};
export default SearchBox;
