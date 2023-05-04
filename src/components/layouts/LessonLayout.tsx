import { Box, Button, Text } from "native-base";
import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import React, { ComponentType } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useAppTheme } from "../../theme";
import BaseLayout from "./BaseLayout";

interface LessonTemplateProps extends InterfaceViewProps {
  children?: ChildNode;
  lessonTemplate: ComponentType;
  homeWorkTemplate: ComponentType;
  dictionaryTemplate: ComponentType;
  chatTemplate: ComponentType;
}

const LessonLayout: React.FC<LessonTemplateProps> = ({
  children,
  lessonTemplate,
  homeWorkTemplate,
  dictionaryTemplate,
  chatTemplate,
  ...props
}) => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const { colors } = useAppTheme();
  const routes = [
    { key: "lesson", title: "Lesson" },
    { key: "homeWork", title: "Home Work" },
    { key: "dictionary", title: "Dictionary" },
    { key: "chat", title: "Chat" },
  ];

  const renderScene = SceneMap({
    lesson: lessonTemplate,
    homeWork: homeWorkTemplate,
    dictionary: dictionaryTemplate,
    chat: chatTemplate,
  });

  return (
    <BaseLayout
      height={"full"}
      flex={1}
      // scrollable
      {...props}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        swipeEnabled={false}
        renderTabBar={(props) => (
          <Box bgColor={"background.body"}>
            <Box flexDir={"row"}>
              <Box flex={1} />

              <Button
                rounded={"md"}
                variant={"ghost"}
                mx={5}
                my={1}
                textAlign={"right"}>
                <Text color={"blue.500"} fontSize={"xl"} fontWeight={"bold"}>
                  Exit
                </Text>
              </Button>
            </Box>
            <TabBar
              indicatorStyle={{ backgroundColor: colors.brand.primary }}
              activeColor="white"
              {...props}
              style={{ backgroundColor: "none" }}
            />
          </Box>
        )}
      />
    </BaseLayout>
  );
};

export default LessonLayout;
