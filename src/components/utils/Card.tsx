import React from "react";
import { Flex, IconButton, Box, Heading } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface CardProps {
  description: string;
}

export default function MyCard({ description }: CardProps) {
  return (
    <Box
      textAlign="left"
      width="150px"
      height="150px"
      backgroundColor="notiom.lgrey"
      border="2px solid"
      borderColor="notiom.mgrey"
      borderRadius="10px"
    >
      <Flex padding="5px 5px 0px 0px" direction="row-reverse">
        <IconButton
          size="xs"
          background="notiom.lgrey"
          color="notiom.mgrey"
          aria-label="Delete card"
          icon={<CloseIcon />}
        />
      </Flex>
      <Heading
        fontWeight="600"
        padding="0px 20px"
        color="notiom.dgrey"
        size="l"
      >
        {description}
      </Heading>
    </Box>
  );
}
