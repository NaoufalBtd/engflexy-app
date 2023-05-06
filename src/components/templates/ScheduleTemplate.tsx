import { Badge, Box, HStack, Heading, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import data from "../../../assets/mock/profSchedule.json";
import { useAppTheme } from "../../theme";

interface AgendaItem extends AgendaEntry {
  profName: string;
  grpName?: string;
}
type AgendaSchedule = { [date: string]: AgendaItem[] };
type AgendaEntry = { name: string; height: number; day: string };
type DateData = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

const DAYS_TO_LOAD = 20;

const ScheduleTemplate = () => {
  const [items, setItems] = useState<AgendaSchedule>({});
  const [coursesDate, setCoursesDate] = useState<string[]>([]);
  const theme = useAppTheme();

  useEffect(() => {
    const dates = data.map((item) => timeToString(item.startTime));
    setCoursesDate(dates);
  }, []);

  const loadItems = (day: DateData) => {
    const currentItems = { ...items };
    const { timestamp } = day;

    for (let i = -10; i < DAYS_TO_LOAD; i++) {
      const time = timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);

      if (!currentItems[strTime]) {
        currentItems[strTime] = [];

        coursesDate.includes(strTime) &&
          data.forEach((item) => {
            if (timeToString(item.startTime) === strTime) {
              currentItems[strTime].push({
                name: item.subject,
                profName: item.profName,
                grpName: item.grpName,
                height: 150,
                day: strTime,
              });
            }
          });
      }
    }

    setItems(currentItems);
  };

  const renderItem = (meet: AgendaItem, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";
    console.log("meet", meet);

    return (
      <TouchableOpacity onPress={() => Alert.alert(JSON.stringify(meet))}>
        <Box borderRadius={"xl"} bgColor={"#D76D77"} p={4}>
          <HStack space={3} alignItems={"center"}>
            <Heading style={{ fontSize, color }}>{meet.name}</Heading>
            <Badge variant={"outline"} colorScheme={"blue"}>
              {meet.profName}
            </Badge>
          </HStack>
          <Text color={"font.primary"} fontSize={"md"}>
            {meet.day}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View
        bgColor={"white"}
        h={30}
        flex={1}
        my={5}
        justifyContent={"center"}
        borderRadius={10}>
        <Text>No Course!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: number | string) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={"2023-03-27"}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
      showClosingKnob={true}
      onScrollEndDrag={() => console.log("onScrollEndDrag")}
      theme={{
        reservationsBackgroundColor: theme.colors.background.surface,
        // backgroundColor: theme.colors.background.level1,
        calendarBackground: theme.colors.background.level1,
        dayTextColor: theme.colors.text.primary,
        agendaDayNumColor: theme.colors.text.primary,
        agendaDayTextColor: theme.colors.text.primary,
      }}
    />
  );
};

export default ScheduleTemplate;

const styles = {
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
};
