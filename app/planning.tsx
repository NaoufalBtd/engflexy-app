import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanningDisplayBox from "../src/components/elements/PlanningDisplayBox";
import { useAppTheme } from "../src/theme";

interface PlanningProps {}

const Planning: React.FC<PlanningProps> = () => {
  const theme = useAppTheme();
  const router = useRouter();
  const data = [
    {
      iconName: "calendar",
      iconColor: "primary.500",
      iconBackground: "primary.200",
      heading: "June 21th, 2023",
      text: "08:00 - 14:30",
    },
    {
      iconName: "rocket",
      iconColor: "fuchsia.500",
      iconBackground: "fuchsia.200",
      heading: "Location",
      text: "zoom.com/?id=123456789",
      isLink: true,
    },
    {
      iconName: "user",
      iconColor: "emerald.500",
      iconBackground: "emerald.200",
      heading: "Course Plan",
      text: "Group Class",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bgColor={"background.surface"} flex={1} px="5">
        <Box mb="3" mt="5">
          <Icon
            onPress={() => {
              router.back();
            }}
            as={FontAwesome}
            name="chevron-left"
            size="lg"
            color={"white"}
          />
        </Box>
        <Box>
          <Box py="2">
            <Heading>Planning</Heading>
            <Text color="white">June 28th</Text>
          </Box>
        </Box>

        <VStack space="4" my={5}>
          {data.map((item, index) => (
            <PlanningDisplayBox
              key={index}
              iconName={item.iconName}
              iconColor={item.iconColor}
              iconBackground={item.iconBackground}
              text={item.text}
              heading={item.heading}
              isLink={item?.isLink || false}
            />
          ))}
        </VStack>

        <Box>
          <Heading>Classmates</Heading>
          <HStack
            justifyContent={"center"}
            bgColor={"background.level2"}
            rounded={"2xl"}
            space={3}
            p={2}>
            <Avatar
              source={{
                uri: "https://i.pravatar.cc/?img='1",
              }}>
              SS
            </Avatar>
            <Avatar
              source={{
                uri: "https://i.pravatar.cc/?img='5",
              }}>
              SS
            </Avatar>
            <Avatar
              source={{
                uri: "https://i.pravatar.cc/?img='6",
              }}>
              SS
            </Avatar>
            <Avatar
              source={{
                uri: "https://i.pravatar.cc/?img='7",
              }}>
              SS
            </Avatar>
          </HStack>
        </Box>

        <Box mt={4}>
          <Heading>Course Sections</Heading>
          <VStack space="4" my={5}>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={FontAwesome}
                name="circle"
                size="md"
                color={theme.colors.brand.tertiary}
              />
              <Text color="white" fontSize={"lg"}>
                Section 1
              </Text>
            </HStack>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={FontAwesome}
                name="circle"
                size="md"
                color={theme.colors.brand.tertiary}
              />
              <Text color="white" fontSize={"lg"}>
                Section 1
              </Text>
            </HStack>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={FontAwesome}
                name="circle"
                size="md"
                color={theme.colors.brand.tertiary}
              />
              <Text color="white" fontSize={"lg"}>
                Section 1
              </Text>
            </HStack>
            <HStack alignItems={"center"} space={2}>
              <Icon
                as={FontAwesome}
                name="circle"
                size="md"
                color={theme.colors.brand.tertiary}
              />
              <Text color="white" fontSize={"lg"}>
                Section 1
              </Text>
            </HStack>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Planning;
