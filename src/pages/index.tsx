import { Flex, Heading, VStack, Text, Image, Box, HStack, Divider } from "@chakra-ui/react";


import { Header } from "../components/header";
import { Carousel } from "../components/Carousel";



export default function Home() {
  return (
    <Flex minHeight="100vh" direction="column" align="center">
      <Header />
      <Flex
        h="335"
        w="100vw"
        background="url('Background.png')"
        bgSize="cover"
        align="center"
        justify="space-between"
        px="100"
      >

        <VStack w="525px">
          <Heading fontSize="36" fontWeight="500" color="gray.100">
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text fontSize="20" color="gray.200">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Image
          src="Airplane.png"
          alt="airplane"
          mb="-100px"
        />

      </Flex>
      <HStack w="1160" spacing="130px" mt="114px" >
        <Image src="Nightlife.png" alt="nightLife"/>
        <Image src="Beach.png" alt="beach" />
        <Image src="Modern.png" alt="modern" />
        <Image src="Classic.png" alt="classic" />
        <Image src="More.png" alt="more" />
      </HStack>
      <Divider mt="20" w="90px" h="2px" bg="gray.600"/>
      <Flex direction="column" justify="center" fontWeight="500" fontSize="36" my="52px">
        <Text align="center">Vamos nessa?</Text>
        <Text align="center">Então escolha seu continente</Text>

      </Flex>
      
      <Carousel/>
      
    </Flex>
  )
}
