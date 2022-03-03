import { Select } from "antd";
import React, { useEffect, useState } from "react";
import data from "../JSON/data.json";

export default function SearchBar({ setSearchTags }) {
  const [options, setOptions] = useState([]);

  const initializeValues = () => {
    let arr = [...new Set(data.flatMap((a) => a.tag))];
    arr = arr.map((a) => ({ value: a }));

    setOptions(arr);
  };

  useEffect(() => {
    initializeValues();
  }, []);

  return (
    <div>
      <Select
        mode="tags"
        style={{ width: 600 }}
        placeholder="Search snippets"
        onChange={(value) => {
          console.log(value);
          setSearchTags(value);
        }}
      >
        {options.map((option, idx) => (
          <Select.Option key={option.value}>{option.value}</Select.Option>
        ))}
      </Select>
    </div>
  );
}
