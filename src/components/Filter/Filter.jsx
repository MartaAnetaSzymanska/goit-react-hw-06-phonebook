import { useDispatch } from "react-redux";
import { change } from "../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (ev) => {
    const filterInput = ev.target.value;
    dispatch(change(filterInput));
  };

  return (
    <div>
      <p>Find contact by name:</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filterInput}
        onChange={handleFilterChange}
      />
    </div>
  );
};
