import { useDispatch } from "react-redux";
import { change } from "../../redux/filterSlice";
import { useState } from "react";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = (ev) => {
    const filterInputValue = ev.target.value;
    setFilterInput(filterInputValue);
    dispatch(change(filterInputValue));
  };

  return (
    <div>
      <p>Find contact by name:</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
    </div>
  );
};
