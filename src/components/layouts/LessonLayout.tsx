import { View } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

interface LessonTemplateProps {}

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const LessonLayout: React.FC<LessonTemplateProps> = () => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ];

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width }}
      swipeEnabled={false}
      renderTabBar={(props) => (
        <TabBar {...props} style={{ backgroundColor: "gray" }} />
      )}
    />
  );
};

export default LessonLayout;
