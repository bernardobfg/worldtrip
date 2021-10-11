import { VStack, Image, Text } from "@chakra-ui/react";

interface IconProps{
  src: string;
  text: string;
}

export function Icon({src, text}: IconProps) {
  return (
    <VStack direction="column" spacing="6">
      <Image src={src} alt={text} w={["60px", "85px"]} h={["60px","85px"]}/>
      <Text fontWeight="600" fontSize={["18px","24px"]}>{text}</Text>
    </VStack>
  )
}