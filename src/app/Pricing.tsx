"use client";
import {
  Flex,
  Box,
  Text,
  Stack,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";

const checkList: string[] = [
  "International calling and messaging API",
  "Additional phone numbers",
  "Automated messages via Zapier",
  "24/7 support and consulting",
];

export const Pricing = () => {
  return (
    <Box
      boxShadow=" 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      maxW={["100%", "100%", "994px"]}
      mx={["6", "6", "auto"]}
      mt="-140"
      borderRadius="12px"
      overflow="hidden"
    >
      <Flex flexWrap={["wrap", "wrap", "nowrap"]}>
        <Box
          py={["9", "9", "14"]}
          px={["0", "0", "12"]}
          w={["100%", "100%", "auto"]}
          textAlign="center"
          bg="#F0EAFB"
        >
          <Text fontWeight="bold" fontSize="24px" color="gray.900">
            Premium PRO
          </Text>
          <Text
            fontWeight="bold"
            fontSize={["48px", "48px", "60px"]}
            color="gray.900"
          >
            $329
          </Text>
          <Text fontWeight="normal" fontSize="18px" color="gray.900">
            billed just once
          </Text>
          <Button
            bg="purple.500"
            colorScheme="gray.50"
            size="md"
            w={["48", "48", "64"]}
            mt="6"
          >
            Get Started
          </Button>
        </Box>
        <Box
          color="gray.700"
          py={["10", "10", "12"]}
          px={["3.5", "3.5", "12"]}
          bg="white"
        >
          <Text fontWeight="medium" fontSize={["md", "md", "lg"]}>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="4" mt="6">
            {checkList.map((list: string) => (
              <HStack as="li" spacing={["1.5", "1.5", "5"]}>
                <Image
                  w={["4", "4", "6"]}
                  src="/icons/check.png"
                  alt="right check"
                />
                <Text fontWeight="medium" fontSize={["md", "md", "lg"]}>
                  {list}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
