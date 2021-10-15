import { Flex, Image, Heading, Text,  VStack } from "@chakra-ui/react"

interface CityProps {
  name: string;
  country: string;
  image: string;
  flag: string;
}

export const City = ({ name, country, image, flag }: CityProps) => {
  return (
    <Flex w="256px" h="279px" direction="column" spacing="18px">
      <Image src={image} alt={name} w="100%" h="173px" />
     <Flex
        justify="space-between"
        align="center"
        px="24px"
        border="1px solid"
        borderColor="yellow"
        borderRadius="0 0 4px 4px "
        borderTop="none"
        h="106px">
        <VStack spacing="3" direction="column" align="flex-start">
          <Heading fontSize="20px" lineHeight="25px">{name}</Heading>
          <Text fontSize="16px" lineHeight="16px">{country}</Text>
        </VStack>
        <Image src={flag} alt={country} borderRadius="100%" w="30px" h="30px"/>
      </Flex>
    </Flex>
  )
}