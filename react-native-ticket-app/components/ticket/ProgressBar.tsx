import { View, Text } from "react-native";
import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  let bgColor;
  switch (progress !== 0) {
    case progress > 70:
      bgColor = "lime";
      break;
    case progress > 30:
      bgColor = "yellow";
      break;
    default:
      bgColor = "red";
  }

  return (
    <View
      style={{
        backgroundColor: "grey",
        height: 10,
        width: "100%",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          backgroundColor: bgColor,
          width: `${progress}%`,
          borderRadius: 20,
          height: 10,
        }}
      />
    </View>
  );
};

export default ProgressBar;
