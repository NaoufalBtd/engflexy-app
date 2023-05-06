import { ScrollView, StatusBar, View } from "native-base";
import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import React from "react";

interface BaseLayoutProps extends InterfaceViewProps {
  scrollable?: boolean;
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  scrollable,
  ...props
}) => {
  const WrapperView = scrollable ? ScrollView : View;
  return (
    <WrapperView bg="background.surface" flex={1} {...props}>
      <StatusBar hidden={true} backgroundColor="blue" />
      {children}
    </WrapperView>
  );
};

export default BaseLayout;
