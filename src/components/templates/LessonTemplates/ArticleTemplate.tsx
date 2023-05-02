import { Image } from "expo-image";
import { Box, Factory, Heading } from "native-base";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";
import { Lesson } from "../../../types/models/lessonsModel";

interface ArticleTemplateProps {
  lesson: Lesson;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ lesson }) => {
  const { label, imageUrl, content, imageUrl2, imageUrl3 } = lesson;
  const [contentWidth, setContentWidth] = useState(0);
  const NImage = Factory(Image);

  return (
    <Box
      onLayout={(evt) => {
        setContentWidth(evt.nativeEvent.layout.width);
      }}>
      <Box py="3">
        <Heading textAlign={"center"}>{label}</Heading>
      </Box>
      <Box bgColor={"background.level2"} p={3}>
        {[imageUrl, imageUrl2, imageUrl3].map((image, index) =>
          image ? (
            <NImage
              mx={"auto"}
              key={index}
              flex={1}
              style={{ aspectRatio: 1 }}
              w={contentWidth}
              contentFit="fill"
              // height={"100%"}
              borderRadius={10}
              source={{ uri: image }}
            />
          ) : null
        )}
        {content ? (
          <RenderHtml
            baseStyle={{ color: "white", fontSize: 16, lineHeight: 30 }}
            contentWidth={contentWidth}
            source={{ html: content }}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default ArticleTemplate;
