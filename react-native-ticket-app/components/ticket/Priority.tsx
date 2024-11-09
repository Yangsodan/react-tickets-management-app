import { View, Text } from "react-native";
import React from "react";
import { Icons } from "@/shared/Icons";

const Priority = ({ priority }: { priority: number }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {priority &&
        Array.from({ length: priority }, (_, index) => (
          <Icons key={index} name="flame" size={18} color={"red"} />
        ))}
    </View>
  );
};

export default Priority;
