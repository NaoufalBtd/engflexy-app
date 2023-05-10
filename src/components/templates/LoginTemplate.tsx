import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  WarningOutlineIcon,
} from "native-base";
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import login from "../../../assets/svg/login.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import { loginStudent } from "../../store/thunks/login";

interface LoginTemplateProps {}

const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, isAuthenticated, isError } = useAppSelector(
    (state) => state.auth
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useAppDispatch();
  const route = useRouter();

  useEffect(() => {
    if (email && password) setIsFormValid(true);
    else setIsFormValid(false);
  }, [email, password]);

  const handleLogin = () => {
    dispatch(loginStudent({ email, password }));
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  if (isAuthenticated) route.replace("home");
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
          <FormControl
            w={{
              base: "75%",
              md: "25%",
            }}
            isRequired
            isInvalid={isError}>
            <Input
              variant="filled"
              value={email}
              onChangeText={setEmail}
              mb={3}
              InputLeftElement={
                <Icon as={FontAwesome} name="user" size={5} ml="2" />
              }
              placeholder="Name"
            />
            <Input
              variant="filled"
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
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              The email or password is incorrect
            </FormControl.ErrorMessage>
          </FormControl>
          <HStack px="5">
            <Box flex={1} />
            <Text color={"white"}> Forgot Password</Text>
          </HStack>
          <Box width={"full"}>
            <Button
              isLoading={loading}
              onPress={handleLogin}
              borderRadius={"lg"}
              disabled={!isFormValid}
              mx="auto"
              w={{ base: "3/4", md: "1/3" }}>
              Login
            </Button>
          </Box>
          <Text>Or</Text>
          <Box>
            <Text>
              New To EngFlexy?{" "}
              <Link href={"/register"} asChild>
                <Text color={"blue.300"}>Register</Text>
              </Link>
            </Text>
          </Box>
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default LoginTemplate;
