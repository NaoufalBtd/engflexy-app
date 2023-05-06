import {
  Box,
  Button,
  Heading,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";
import React from "react";
import BackButton from "../elements/BackButton";
import Input from "../elements/Input";
import BaseLayout from "../layouts/BaseLayout";

interface RegisterTemplateProps {}

const RegisterTemplate: React.FC<RegisterTemplateProps> = () => {
  const inputWidth = {
    base: "75%",
    md: "25%",
  };
  return (
    <BaseLayout>
      <Box px={5} py={4}>
        <BackButton title="Back to the Login Page" />
      </Box>
      <ScrollView
        h={"full"}
        w="full"
        flex={1}
        mx={"auto"}
        bg={"background.level1"}
        py={8}
        px={3}
        borderTopRadius={50}>
        <Box mb={"5"}>
          <Heading
            fontSize={"xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"brand.primary"}>
            Let's get started
          </Heading>
          <Text textAlign={"center"}>
            Register Now and Enjoy a free trial lesson
          </Text>
        </Box>
        <Box>
          <VStack mx={"auto"} space={3}>
            <Input placeholder="Full Name" w={inputWidth} />
            <Input placeholder="Email" w={inputWidth} />
            <Input placeholder="Phone Number" w={inputWidth} />
            <Input placeholder="Password" w={inputWidth} />
            <Select
              variant="filled"
              w={inputWidth}
              placeholder="Select Your Level"
              minWidth="64">
              <Select.Item label="Beginner" value="1" />
              <Select.Item label="Intermediate" value="ts" />
            </Select>
          </VStack>
          <Box mt={5} mx={"auto"} w={inputWidth}>
            <Button>Sign Up</Button>
          </Box>
          <Box my={3}>
            <Text textAlign={"center"}>
              Or{" "}
              <Text fontWeight={"bold"} color={"blue.500"}>
                Login To Your Account
              </Text>
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </BaseLayout>
  );
};

export default RegisterTemplate;
