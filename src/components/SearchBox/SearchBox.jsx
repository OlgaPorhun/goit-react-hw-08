import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
