import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Pressable,
  Stack,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import login from "../../../assets/svg/login.svg";

interface LoginTemplateProps {}

const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  const [boxWidth, setBoxWidth] = useState(0);

  const handleLogin = async () => {
    console.log("Login");
    const response = await fetch("http://192.168.0.106:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "admin",
        password: "admin",
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <View
      height={"full"}
      bgColor={"background.surface"}
      onLayout={(evt) => {
        setBoxWidth(evt.nativeEvent.layout.width);
      }}>
      <Box mt="10" />
      <Box>
        <SvgXml xml={login} height={250} width={boxWidth - 20} />
      </Box>

      <Box
        bgColor={"background.level2"}
        p={2}
        pt="10"
        borderTopRadius={70}
        height={"full"}>
        <Heading mx={5} my="4">
          Login
        </Heading>
        <Stack space={4} alignItems={"center"}>
          <Input
            variant="filled"
            // borderColor={"muted.400"}
            placeholderTextColor={"muted.400"}
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={FontAwesome}
                name="user"
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Name"
          />
          <Input
            variant="filled"
            w={{
              base: "75%",
              md: "25%",
            }}
            type={true ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => console.log("ok")}>
                <Icon
                  as={FontAwesome}
                  name="eye"
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <HStack px="5">
            <Box flex={1} />
            <Text color={"white"}> Forgot Password</Text>
          </HStack>
          <Box width={"full"}>
            <Button
              onPress={handleLogin}
              borderRadius={"lg"}
              mx="auto"
              w={{ base: "3/4", md: "1/3" }}>
              Login
            </Button>
          </Box>
          <Text>Or</Text>
          <Box>
            <Text>
              New To EngFlexy? <Text color={"blue.300"}>Register</Text>
            </Text>
          </Box>
        </Stack>
      </Box>
    </View>
  );
};

export default LoginTemplate;
