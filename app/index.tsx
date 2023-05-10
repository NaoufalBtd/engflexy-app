import { useRouter } from "expo-router";
import React from "react";
import HomeTemplate from "../src/components/templates/HomeTemplate";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const route = useRouter();
  return <HomeTemplate />;
};

export default index;
