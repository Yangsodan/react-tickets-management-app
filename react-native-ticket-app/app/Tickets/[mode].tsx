import { View, Text, TextInput, Button, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { TicketInfo } from "@/models/CommonType";
import { commonStyle } from "@/shared/CommonStyle";
import { modTicket } from "@/shared/Communication";

const DynamicTicketPage = () => {
  const { mode, details } = useLocalSearchParams();
  const [ticketInfo, setTicketInfo] = useState<TicketInfo>({
    _id: "",
    description: "",
    category: "",
    priority: 0,
    progress: 0,
    status: "",
    title: "",
    updatedAt: new Date(),
  });

  useEffect(() => {
    if (mode === "edit") {
      setTicketInfo((prev) => ({ ...prev, ...JSON.parse(details.toString()) }));
    }
  }, []);

  const handleChange = (id: string, value: string | number) => {
    setTicketInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleTicket = async () => {
    const isUpdate = mode === "edit" ? true : false;
    await modTicket(isUpdate, ticketInfo);
    router.back();
  };

  return (
    <View style={{ ...commonStyle.shadowStyle, marginTop: 20 }}>
      <Stack.Screen
        options={{
          title: mode === "new" ? "Create Ticket" : "Edit Ticket",
        }}
      />
      <View>
        <Text style={commonStyle.Title}>Title: </Text>
        <TextInput
          style={commonStyle.TextInput}
          value={ticketInfo.title}
          onChange={(e) => {
            handleChange("title", e.nativeEvent.text);
          }}
        />
      </View>
      <View>
        <Text style={commonStyle.Title}>Description: </Text>
        <TextInput
          style={commonStyle.TextInput}
          value={ticketInfo.description}
          onChange={(e) => {
            handleChange("description", e.nativeEvent.text);
          }}
        />
      </View>
      <View>
        <Text style={commonStyle.Title}>Category: </Text>
        <TextInput
          style={commonStyle.TextInput}
          value={ticketInfo.category}
          onChange={(e) => {
            handleChange("category", e.nativeEvent.text);
          }}
        />
      </View>
      <View>
        <Text style={commonStyle.Title}>Priority: </Text>
        <TextInput
          keyboardType="numeric"
          style={commonStyle.TextInput}
          value={ticketInfo.priority.toString()}
          onChange={(e) => {
            let value = Number.parseInt(e.nativeEvent.text);
            if (Number.isNaN(value)) value = 0;
            handleChange("priority", value);
          }}
        />
      </View>
      <View>
        <Text style={commonStyle.Title}>Progress: </Text>
        <TextInput
          keyboardType="numeric"
          style={commonStyle.TextInput}
          value={ticketInfo.progress.toString()}
          onChange={(e) => {
            let value = Number.parseInt(e.nativeEvent.text);
            if (Number.isNaN(value)) value = 0;
            handleChange("progress", value);
          }}
        />
      </View>
      <View>
        <Text style={commonStyle.Title}>Status: </Text>
        <TextInput
          style={commonStyle.TextInput}
          value={ticketInfo.status}
          onChange={(e) => {
            handleChange("status", e.nativeEvent.text);
          }}
        />
      </View>
      <Pressable
        onPress={() => {
          handleTicket();
        }}
        style={{
          borderRadius: 15,
          backgroundColor: "skyblue",
          marginTop: 30,
        }}
      >
        <Text
          style={{ textAlign: "center", alignSelf: "center", fontSize: 30 }}
        >
          {mode === "new" ? "CREATE TICKET" : "EDIT TICKET"}
        </Text>
      </Pressable>
    </View>
  );
};

export default DynamicTicketPage;
