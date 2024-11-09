import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState, useCallback, createContext } from "react";
import TicketTemplate from "@/components/ticket/TicketTemplate";
import { TicketInfo } from "@/models/CommonType";
import { commonStyle } from "@/shared/CommonStyle";
import { getAllTickets } from "@/shared/Communication";
import { useFocusEffect } from "@react-navigation/native";

export const RefreshHomePage = createContext(() => {});
const Index = () => {
  const [ticketInfo, setTicketInfo] = useState<TicketInfo[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getTicketInfo();
  };

  const getTicketInfo = async () => {
    try {
      const data = await getAllTickets();
      setTicketInfo(data);
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      onRefresh();
    }, [])
  );

  const categories = [...new Set(ticketInfo?.map(({ category }) => category))];
  const statuses = [...new Set(ticketInfo?.map(({ status }) => status))];

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <RefreshHomePage.Provider key={1} value={onRefresh}>
          {ticketInfo.length > 1 &&
            categories.map((CATEGORY: string) => (
              <View>
                <Text key={CATEGORY} style={{ fontSize: 20, padding: 10 }}>
                  {CATEGORY}
                </Text>
                <View>
                  {ticketInfo
                    .filter((t: TicketInfo) => t.category === CATEGORY)
                    .map((TICKET: TicketInfo, TICKETindex: number) => (
                      <TicketTemplate
                        key={TICKET._id}
                        ticket={TICKET}
                        style={commonStyle.shadowStyle}
                      />
                    ))}
                </View>
              </View>
            ))}
        </RefreshHomePage.Provider>
      </ScrollView>
    </View>
  );
};

export default Index;
