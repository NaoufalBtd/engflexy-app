import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, Collapse, Heading } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

interface AccordionItemProps {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  isOpen,
  title,
}) => {
  const [open, setOpen] = useState(!!isOpen);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <TouchableOpacity onPress={() => toggleOpen()}>
        <Box flexDir={"row"} justifyContent={"space-between"} p={5}>
          <Heading color={"white"}>{title}</Heading>
          {/* todo: make the switch of icons work softer */}
          <FontAwesome
            name={open ? "chevron-down" : "chevron-right"}
            size={24}
            color="white"
          />
        </Box>
      </TouchableOpacity>
      <Collapse isOpen={open}>
        <Box bgColor={"white"} p={3}>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

export default AccordionItem;
