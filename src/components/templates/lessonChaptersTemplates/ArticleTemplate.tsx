import { Image } from "expo-image";
import { Box, Factory, Heading } from "native-base";
import React, { useEffect, useState } from "react";
import { Image as RImage } from "react-native";
import RenderHtml from "react-native-render-html";
import { LessonChapter } from "../../../types/models/lessonChapterModel";

interface ArticleTemplateProps {
  lesson: LessonChapter;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ lesson }) => {
  const { label, imageUrl, content, imageUrl2, imageUrl3 } = lesson;
  const [imagesWidth, setImagesWidth] = useState([1, 1, 1]);
  const [imagesHeight, setImagesHeight] = useState([1, 1, 1]);
  const [contentWidth, setContentWidth] = useState(0);
  const NImage = Factory(Image);

  useEffect(() => {
    [imageUrl, imageUrl2, imageUrl3].map((image, index) => {
      image &&
        RImage.getSize(image, (width, height) => {
          setImagesWidth((prev) => {
            prev[index] = width;
            return [...prev];
          });
          setImagesHeight((prev) => {
            prev[index] = height;
            return [...prev];
          });
        });
    });
  }, [imageUrl, imageUrl2, imageUrl3]);

  return (
    <Box
      onLayout={(evt) => {
        setContentWidth(evt.nativeEvent.layout.width);
      }}>
      <Box py="3">
        <Heading textAlign={"center"}>{label}</Heading>
      </Box>
      <Box bgColor={"background.level2"} py={5} rounded={"md"}>
        {[imageUrl, imageUrl2, imageUrl3].map((image, index) =>
          image ? (
            <NImage
              mx={"auto"}
              key={index}
              flex={1}
              style={{ aspectRatio: imagesWidth[index] / imagesHeight[index] }}
              w={contentWidth}
              // w={contentWidth * 0.8}
              // h={300}
              contentFit="scale-down"
              // height={"100%"}
              borderRadius={10}
              source={{ uri: image }}
            />
          ) : null
        )}
        {content ? (
          <Box px={2}>
            <RenderHtml
              baseStyle={{ color: "white", fontSize: 16, lineHeight: 30 }}
              contentWidth={contentWidth}
              source={{ html: content }}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ArticleTemplate;
