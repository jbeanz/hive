import { useState } from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import Data from "../Data/sampleData";

interface Props {
  singleSelectData: string[];
  singleSelectLabel: string;
  multiSelectData: Data[];
  multiSelectLabel: string;
}

const CreateProfile = ({
  singleSelectData,
  singleSelectLabel,
  multiSelectData,
  multiSelectLabel,
}: Props) => {
  const [selected, setSelectedOptions] = useState<number[]>([]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  //Toggle multi-select names and options
  const toggleDisplay = (id: number, name: string, manualAction?: string) => {
    //Select all
    if (id === 0) {
      const allOptions = [];
      const allNames = [];
      for (const option of multiSelectData) {
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
        label={multiSelectLabel}
        data={multiSelectData}
        selected={selected}
        selectedNames={selectedNames}
        toggleDisplay={toggleDisplay}
      />
      <SingleSelect label={singleSelectLabel} data={singleSelectData} />
    </div>
  );
};

export default CreateProfile;
