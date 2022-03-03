import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/CodeSnippet";
import data from "../JSON/data.json";

export default function HomePage({ searchTags }) {
  const [listData, setListData] = useState([...data]);

  useEffect(() => {
    if (!searchTags.length) {
      return setListData([...data]);
    }
    let arr = [];
    for (let x in data) {
      let currentTags = data[x].tag;
      for (let y in currentTags) {
        console.log(currentTags, data[x], searchTags);
        if (searchTags.includes(currentTags[y])) arr.push(data[x]);
      }
    }
    setListData(arr);
  }, [searchTags]);

  return (
    <Row gutter={[20, 20]} justify="center">
      {listData.map((card) => (
        <Col span={18}>
          <CodeSnippet card={card} />
        </Col>
      ))}
    </Row>
  );
}
