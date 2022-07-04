import { useState, useEffect } from "react";

interface Props {
  data: string[];
  label: string;
}

const SingleSelect = ({ data, label }: Props) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setSelected("");
  }, []);

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div className="single-select">
      <h2>{label}</h2>
      <form action="#">
        <select
          className="c-single-select-dropdown"
          value={selected}
          onChange={handleSelect}
          name="single-select"
          id="single-select"
        >
          {data
            ? data.map((item) => (
                <option className=".c-single-select-dropdown_option" key={item}>
                  {item}
                </option>
              ))
            : null}
        </select>
      </form>
    </div>
  );
};
export default SingleSelect;
