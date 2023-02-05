"use client";
import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";

const features: { img: string; text: string }[] = [
  {
    img: "/icons/group.png",
    text: "30 days money back Guarantee",
  },
  {
    img: "/icons/group_1.png",
    text: "No setup fees 100% hassle-free",
  },
  {
    img: "/icons/group_2.png",
    text: "No monthly subscription Pay once and for all",
  },
];

export const Feautres = () => {
  return (
    <Box maxW="906px" m="auto" mx={["6", "6", "auto"]} my={["10", "10", "14"]}>
      <Flex
        justifyContent="space-between"
        direction={["column", "column", "row"]}
      >
        {features.map((feature) => (
          <HStack
            spacing="6"
            maxW={["100%", "100%", "72"]}
            my={["6", "6", "auto"]}
          >
            <Image src={feature.img} alt="feature 1" />
            <Text color="gray.900" fontWeight="bold" fontSize="18px">
              {feature.text}
            </Text>
          </HStack>
        ))}
      </Flex>
    </Box>
  );
};
