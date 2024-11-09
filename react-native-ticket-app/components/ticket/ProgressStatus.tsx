import { View, Text } from "react-native";
import React from "react";

const ProgressStatus = ({ status }: { status: string }) => {
  let bgColor;
  switch (status.toLowerCase()) {
    case "not started":
      bgColor = "red";
      break;
    case "working on":
      bgColor = "yellow";
      break;
    case "done":
      bgColor = "lime";
      break;
  }

  return (
    <Text
      style={{
        backgroundColor: bgColor,
        width: "auto",
        borderRadius: 20,
        margin: 20,
      }}
    >
      {status.toUpperCase()}
    </Text>
  );
};

export default ProgressStatus;
