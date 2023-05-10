import { AxiosError } from "axios";
import { passwordStrength } from "check-password-strength";
import { Link } from "expo-router";
import {
  Box,
  Button,
  FormControl,
  Heading,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { REGISTER_URL } from "../../constants/ApiUrls";
import { useAppDispatch } from "../../hooks/stateHooks";
import { ApiParcours } from "../../types/api/ApiParcours";
import { RegisterForm } from "../../types/forms/RegisterForm";
import { postFetcher } from "../../utils/serverUtils";
import BackButton from "../elements/BackButton";
import Input from "../elements/Input";
import BaseLayout from "../layouts/BaseLayout";
import PwdStrengthIndicator from "../modules/PwdStrengthIndicator";

interface RegisterTemplateProps {}

const inputWidth = {
  base: "75%",
  md: "25%",
};

const RegisterTemplate: React.FC<RegisterTemplateProps> = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState<ApiParcours["id"]>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [disabled, setDisabled] = useState(true);
  const [showPwdIndicator, setShowPwdIndicator] = useState(false);
  const dispatch = useAppDispatch();
  const pwdStrength = passwordStrength(password);

  const handleRegister = async () => {
    setLoading(true);
    try {
      await postFetcher<RegisterForm>(REGISTER_URL, {
        nom: firstName,
        prenom: lastName,
        username: email,
        password: password,
        numero: phoneNumber,
        parcours: {
          id: level,
        },
      });
    } catch (err) {
      console.error(err);
      if (err instanceof AxiosError) {
        setError(err.response?.data.message);
      } else {
        setError("An error occured, please try again later");
      }
    }
    setLoading(false);
  };
  const isFormValid = () => {
    if (!firstName || !lastName || !email || !password || !level) return false;
    return true;
  };

  useEffect(() => {
    isFormValid() ? setDisabled(false) : setDisabled(true);
  }, [firstName, lastName, email, password, level]);

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
            color={"brand.secondary"}>
            Let's get started
          </Heading>
          <Text textAlign={"center"}>
            Register Now and Enjoy a free trial lesson
          </Text>
        </Box>
        <Box>
          <FormControl
            w={{
              base: "100%",
              md: "25%",
            }}>
            <VStack mx={"auto"} space={3}>
              <Input
                placeholder="First Name"
                w={inputWidth}
                onChangeText={(value) => setFirstName(value)}
              />
              <Input
                placeholder="Last Name"
                w={inputWidth}
                onChangeText={(value) => setLastName(value)}
              />

              <Input placeholder="Email" w={inputWidth} />
              <Input placeholder="Phone Number" w={inputWidth} />
              <PhoneInput
                containerStyle={{
                  backgroundColor: "black",
                  borderRadius: 10,
                  width: "75%",
                }}
                textContainerStyle={{
                  backgroundColor: "black",
                  borderRadius: 10,
                }}
                textInputStyle={{ color: "white" }}
                codeTextStyle={{ color: "white" }}
                value={phoneNumber}
                defaultCode="MA"
                layout="first"
                withShadow
              />
              <Input
                placeholder="Password"
                onFocus={() => setShowPwdIndicator(true)}
                onBlur={() => !password.length && setShowPwdIndicator(false)}
                onChangeText={(value) => setPassword(value)}
                w={inputWidth}
              />
              <PwdStrengthIndicator
                shown={showPwdIndicator}
                pwdStrength={pwdStrength}
              />
              <Select
                variant="filled"
                w={inputWidth}
                placeholder="Select Your Level"
                minWidth="64">
                <Select.Item label="Beginner" value="beginner" />
                <Select.Item label="Intermediate" value="intermediate" />
              </Select>
            </VStack>
          </FormControl>
          <Box mt={5} mx={"auto"} w={inputWidth}>
            <Button
              isLoading={loading}
              onPress={handleRegister}
              isDisabled={!disabled}>
              Sign Up
            </Button>
          </Box>
          <Box my={3}>
            <Text textAlign={"center"}>
              Or{" "}
              <Link href="/login" replace>
                <Text fontWeight={"bold"} color={"blue.500"}>
                  Login To Your Account
                </Text>
              </Link>
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </BaseLayout>
  );
};

export default RegisterTemplate;
