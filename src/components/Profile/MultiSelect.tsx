import { useEffect, useState } from "react";
import Data from "../Data/sampleData";
interface Props {
  selected: number[];
  toggleDisplay: (id: number, name: string, manualAction?: string) => void;
  data: Data[];
  label: string;
  selectedNames: string[];
}
const MultiSelect = ({
  selected,
  selectedNames,
  toggleDisplay,
  data,
  label,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    setOpen(false);
    setIsAllSelected(false);
  }, []);

  const handleOpen = (e: any) => {
    setOpen(!open);
  };

  const handleSelectAll = (e: any) => {
    if (!isAllSelected) {
      setIsAllSelected(true);
      toggleDisplay(0, "all");
    } else {
      setIsAllSelected(false);
      toggleDisplay(-1, "all");
    }
  };
  const hiddenOptions =
    selectedNames.length > 2 ? selectedNames.slice(0, 2) : null;

  return (
    <div className="c-multi-select-dropdown">
      <h2>{label}</h2>
      <div className="c-multi-select-dropdown__selected">
        <div>
          {hiddenOptions
            ? hiddenOptions.map((name) => (
                <div className="name" key={name}>
                  {name}
                </div>
              ))
            : selectedNames.map((name) => (
                <div className="name" key={name}>
                  {name}
                </div>
              ))}
          {hiddenOptions ? <span className="hidden-options">...</span> : null}
        </div>
        {open ? (
          <img
            src="https://img.icons8.com/ultraviolet/40/000000/sort-up.png"
            alt="up arrow"
            onClick={handleOpen}
          />
        ) : (
          <img
            src="https://img.icons8.com/ultraviolet/40/000000/sort-down.png"
            alt="dropdown arrow"
            onClick={handleOpen}
          />
        )}
      </div>
      {open ? (
        <ul className="c-multi-select-dropdown__data">
          <li
            key={0}
            className="c-multi-select-dropdown__option"
            onClick={handleSelectAll}
          >
            <input
              type="checkbox"
              checked={isAllSelected}
              className="c-multi-select-dropdown__option-checkbox"
            ></input>
            <span>All</span>
          </li>
          {data.map((option) => {
            const isSelected = selected.includes(option.id);
            return (
              <li
                key={option.id}
                className="c-multi-select-dropdown__option"
                onClick={() => toggleDisplay(option.id, option.name)}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  className="c-multi-select-dropdown__option-checkbox"
                  onClick={() =>
                    toggleDisplay(option.id, option.name, "remove")
                  }
                ></input>
                <span>{option.name}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default MultiSelect;
