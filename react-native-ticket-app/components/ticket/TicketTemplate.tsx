import { View, Text, Pressable } from "react-native";
import { TicketInfo } from "@/models/CommonType";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import ProgressStatus from "./ProgressStatus";
import DeleteBlock from "./DeleteBlock";
import { useRouter } from "expo-router";
import { createContext, useState } from "react";

const TicketTemplate = ({
  ticket,
  style,
}: {
  ticket: TicketInfo;
  style?: Object;
}) => {
  const [isShown, setShown] = useState(false);
  const router = useRouter();
  const handlePress = (ticket: TicketInfo) => {
    router.push({
      pathname: "/Tickets/[mode]",
      params: {
        mode: "edit",
        details: JSON.stringify(ticket),
      },
    });
  };

  const handleLongPress = () => {
    setShown(true);
    setTimeout(() => {
      setShown(false);
    }, 3 * 1000);
  };

  return (
    <Pressable
      onLongPress={handleLongPress}
      onPress={() => handlePress(ticket)}
    >
      <View style={style}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: "auto",
          }}
        >
          <Priority priority={ticket.priority} />
          <DeleteBlock id={ticket._id} isShown={isShown} />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>{ticket.title}</Text>
        <View>
          <Text>Ticket Description:</Text>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 5,
              height: 48,
            }}
          >
            <Text style={{ padding: 5 }}>{ticket.description}</Text>
          </View>
        </View>
        <View>
          <Text>
            Last Update: {new Date(ticket.updatedAt).toLocaleString()}
          </Text>
        </View>

        <View>
          <Text>Progress:</Text>
          <ProgressBar progress={ticket.progress} />
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text>
            Current Status:
            <ProgressStatus status={ticket.status} />
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TicketTemplate;
