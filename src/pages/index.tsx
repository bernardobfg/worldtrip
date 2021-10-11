import { Flex, Heading, VStack, Text, Image, Box, HStack,SimpleGrid, Divider, useBreakpointValue, Wrap } from "@chakra-ui/react";
import Head from 'next/head';

import { Header } from "../components/header";
import { Carousel } from "../components/Carousel";
import { Icon } from "../components/icon";



export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>
      <Flex minHeight="100vh" direction="column" align="center">
      <Header />
      <Flex
        h="335"
        w="100vw"
        background="url('Background.png')"
        bgSize="cover"
        align="center"
        justify="space-between"
        px={["30px", "60px", "80px", "100px"]}
      >

        <VStack w="525px">
          <Heading fontSize="36" fontWeight="500" color="gray.100">
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text fontSize="20" color="gray.200">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        {
          isWideVersion &&
          <Image
            src="Airplane.png"
            alt="airplane"
            mb="-100px"
          />
        }

      </Flex>
      <Box maxWidth="90vw" w="1160px">
        <Wrap spacing={["30px", "60px","130px"]} w="100%" mt="114px" justify ="center">
          <Icon src="cocktail.png" text="vida noturna" />
          <Icon src="surf.png" text="praia" />
          <Icon src="building.png" text="moderno" />
          <Icon src="museum.png" text="clássico" />
          <Icon src="earth.png" text="e mais" />
        </Wrap>
      </Box>
      <Divider mt={["10", "20"]} w="90px" h="2px" bg="gray.600" />
      <Flex direction="column" justify="center" fontWeight="500" fontSize={["20px", "36"]} my={["26px", "52px"]}>
        <Text align="center">Vamos nessa?</Text>
        <Text align="center">Então escolha seu continente</Text>

      </Flex>

      <Carousel />

    </Flex>
    </>
  )
}
