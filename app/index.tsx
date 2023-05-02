import { useRouter } from "expo-router";
import React from "react";
import LessonTemplate from "../src/components/templates/LessonTemplate";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const route = useRouter();
  return <LessonTemplate />;
};

export default index;
