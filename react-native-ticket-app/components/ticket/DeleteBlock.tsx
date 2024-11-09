import { Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { delTicket } from "@/shared/Communication";
import { RefreshHomePage } from "@/app/index";

const DeleteBlock = ({ id, isShown }: { id: string; isShown: boolean }) => {
  const onRefresh = useContext(RefreshHomePage);
  const display = isShown ? "flex" : "none";

  const handlePress = async () => {
    await delTicket(id);
    onRefresh();
  };

  return (
    <Pressable
      style={{
        display: display,
        borderWidth: 0.5,
        borderColor: "red",
        borderRadius: 5,
        marginLeft: "auto",
        zIndex: 99,
      }}
      onPress={() => {
        handlePress();
      }}
    >
      <Text style={{ color: "red", fontSize: 10, margin: 10 }}>DELETE</Text>
    </Pressable>
  );
};

export default DeleteBlock;
