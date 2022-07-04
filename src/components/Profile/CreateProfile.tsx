import { useState } from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import { Age, Tag } from "../Data/sampleData";

const CreateProfile = () => {
  const [selected, setSelectedOptions] = useState<number[]>([]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const data = Tag;

  //Toggle multi-select names and options
  const toggleDisplay = (id: number, name: string, manualAction?: string) => {
    //Select all
    if (id === 0) {
      const allOptions = [];
      const allNames = [];
      for (const option of data) {
        allOptions.push(option.id);
        allNames.push(option.name);
      }
      setSelectedOptions(allOptions);
      setSelectedNames(allNames);
    } //Deselect all
    else if (id === -1) {
      setSelectedOptions([]);
      setSelectedNames([]);
    } else if (manualAction === "remove") {
      setSelectedOptions((prevSelected) => {
        // remove selected
        const selected: number[] = [...prevSelected];
        return selected.filter((item) => item !== id);
      });
    } else {
      setSelectedOptions((prevSelected) => {
        // if already selected, remove
        const selected: number[] = [...prevSelected];
        if (selected.includes(id)) {
          return selected.filter((item) => item !== id);
          // else, add
        } else {
          selected.push(id);
          return selected;
        }
      });
      setSelectedNames((prevSelected) => {
        // if already selected, remove
        const selected: string[] = [...prevSelected];
        if (selected.includes(name)) {
          return selected.filter((item) => item !== name);
          // else, add
        } else {
          selected.push(name);
          return selected;
        }
      });
    }
  };

  return (
    <div className="flexbox-container">
      <MultiSelect
        label={"Tag"}
        data={Tag}
        selected={selected}
        selectedNames={selectedNames}
        toggleDisplay={toggleDisplay}
      />
      <SingleSelect label={"Age"} data={Age} />
    </div>
  );
};

export default CreateProfile;
