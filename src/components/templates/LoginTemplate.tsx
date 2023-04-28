import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import login from "../../../assets/svg/login.svg";
import { useAppDispatch } from "../../hooks/stateHooks";
import { postFetcher } from "../../utils/serverUtils";

interface LoginTemplateProps {}

const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const dispatch = useAppDispatch();
  const route = useRouter();

  const handleLogin = async () => {
    const url = "http://192.168.0.106:8036/etudiant/user/login";
    try {
      const res = await postFetcher<{
        token: string;
      }>(url, {
        username,
        password,
      });

      dispatch({
        type: login,
        payload: {
          username,
          // token: res.data.token,
        },
      });
      route.replace("/home");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView
      flex={1}
      height={screenHeight}
      bgColor={"background.surface"}
      onLayout={(evt) => {
        setBoxWidth(evt.nativeEvent.layout.width);
        setScreenHeight(evt.nativeEvent.layout.height);
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
            value={username}
            onChangeText={setUsername}
            // placeholderTextColor={"muted.400"}
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon as={FontAwesome} name="user" size={5} ml="2" />
            }
            placeholder="Name"
          />
          <Input
            variant="filled"
            w={{
              base: "75%",
              md: "25%",
            }}
            type={showPassword ? "text" : "password"}
            value={password}
            onChangeText={setPassword}
            InputRightElement={
              <Pressable onPress={togglePassword}>
                <Icon
                  as={FontAwesome}
                  name={showPassword ? "eye" : "eye-slash"}
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
    </ScrollView>
  );
};

export default LoginTemplate;
