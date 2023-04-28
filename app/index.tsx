import { useRouter } from "expo-router";
import React from "react";
import ScheduleTemplate from "../src/components/templates/ScheduleTemplate";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const route = useRouter();
  return <ScheduleTemplate />;
};

export default index;
