import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { commonStyle } from "@/shared/CommonStyle";

const Test = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ ...commonStyle.shadowStyle }}>
      <Text>Challenge</Text>
      <Text>current counter : {counter}</Text>
      <Button
        title="counter + 1"
        onPress={() => setCounter((prev) => prev + 1)}
      />
    </View>
  );
};

export default Test;
