import { Box, Heading, Image } from "native-base";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";

interface ArticleTemplateProps {
  title: string;
  imageUri: string;
  content: string;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  title,
  imageUri,
  content,
}) => {
  const [contentWidth, setContentWidth] = useState(0);
  return (
    <Box
      onLayout={(evt) => {
        setContentWidth(evt.nativeEvent.layout.width);
      }}>
      <Box>
        <Heading>{title}</Heading>
      </Box>
      <Box bgColor={"background.level2"} p={3}>
        <Image
          alt="article image"
          w={contentWidth}
          maxH={150}
          source={{ uri: imageUri }}
        />
        <RenderHtml
          baseStyle={{ color: "white", fontSize: 16 }}
          contentWidth={contentWidth}
          source={{ html: content }}
        />
      </Box>
    </Box>
  );
};

export default ArticleTemplate;
