import React from "react";
import { Card, Typography } from "antd";

const { Paragraph } = Typography;

export default function CodeSnippet({ card }) {
  return (
    <Card
      title={card.filePath}
      extra={
        <a href={card.fileLink}>
          <Paragraph style={{ width: 300 }} ellipsis={true}>
            {card.fileLink}
          </Paragraph>
        </a>
      }
      style={{ width: "100%" }}
    >
      <pre>
        <code>{card.code}</code>
      </pre>
    </Card>
  );
}
