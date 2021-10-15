import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Flex, SimpleGrid, Text, Box, Heading, HStack, VStack, Icon, Tooltip } from "@chakra-ui/react";
import { Header } from "../../components/header"
import { City } from '../../components/city';

interface Continente {
  name: string;
  image: string;
  text: string;
  countries: number;
  languages: number;
  cities: Cities[];
}

type Cities = {
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface ContinenteProps {
  continente: Continente
}

export default function Continent({ continente }: ContinenteProps) {

  return (
    <>
      <Head>
        <title> worldtrip | {continente.name}</title>
      </Head>
      <Flex direction="column" align="center" mb="35px">
        <Header />
        <Flex direction="column">
          <Flex
            background={`url(${continente.image})`}
            bgSize="cover"
            w="100vw"
            h={["150px", "150px", "450px"]}
            align={["center", "center", "flex-end"]}
            py="60px">
            <Heading
              px={["20px",
                "30px", "60px"]}
              color="gray.100"
              width="100%"
              maxWidth="1500px"
              mx="auto"
              fontSize={["28px", "28px", "48px"]}
              textAlign={["center", "center", "start"]}
            >
              {continente.name}
            </Heading>
          </Flex>
          <Flex direction="column" width="100%" maxWidth="1500px" mx="auto" px={["20px", "30px", "60px"]}>
            <Flex mt={["30px", "30px", "80px"]} align="center" justify="space-between" direction={["column", "column", "column", "row"]}>
              <Text
                color="gray.600"
                w={["90%", "90%",
                  "600px"]}
                align="justify"
                fontSize={["14px", "24px"]}>
                {continente.text}
              </Text>
              <HStack spacing={["20px", "42px"]} mt={["30px", "30px", "30px", "0"]}>
                <VStack>
                  <Heading fontSize={["24px", "48px"]} color="yellow">{continente.countries}</Heading>
                  <Text fontSize={["18px", "24px"]}>países</Text>
                </VStack>
                <VStack>
                  <Heading fontSize={["24px", "48px"]} color="yellow">{continente.languages}</Heading>
                  <Text fontSize={["18px", "24px"]}>línguas</Text>
                </VStack>
                <VStack>
                  <Heading fontSize={["24px", "48px"]} color="yellow">{continente.cities.length}</Heading>
                  <Text fontSize={["18px", "24px"]}>
                    cidades +100
                    <Tooltip label="100 cidades mais visitadas do mundo">
                      <span><Icon ml="10px" as={AiOutlineInfoCircle} /></span>
                    </Tooltip>
                  </Text>
                </VStack>
              </HStack>
            </Flex>
            <Heading fontWeight="500" fontSize={["24px", "36px"]} mt={["30px", "30px", "80px"]}>Cidades +100</Heading>
            <SimpleGrid w="100%" mt="40px" rowGap="45px" minChildWidth={["269px", "300px"]} justifyItems={["center", "center", "start"]}>
              {continente.cities.map((city, index) => {
                return (
                  <City {...city} key={index} />
                )
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>

    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continenteName: "europa" } },
      { params: { continenteName: "africa" } },
      { params: { continenteName: "asia" } }
    ],
    fallback: 'blocking'

  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { continenteName } = context.params
  const continentes = [
    {
      name: "Europa",
      text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
      image: "/Europe.png",
      countries: 50,
      languages: 60,
      cities: [
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        },
        {
          name: "Londres",
          country: "Reino unido",
          image: "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
        }
      ]
    },
    {
      name: "África",
      text: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
      image: "/Africa.jpg",
      countries: 70,
      languages: 80,
      cities: [
       
        {
          name: "Johannesburg",
          country: "África do sul",
          image: "https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          flag: "data:image/png;base64,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"
        },
        {
          name: "Johannesburg",
          country: "África do sul",
          image: "https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA21BMVEUAek3eODEAI5X///8AAAD/thIAd0ndKSBHkW8ABJAAdVAAd0//uQv/uxL/vhMAekwAbjkAHpTeMywAdEL7sxLbFgXOpyby9/X1rxEAbji50sZPlXXEjA7XqiPv9fPcJBqEkjtiRge2gg3erCBUPAZ3jj6vzL5pSwgcfUtbQQY+jWpinoL43t3bFADgRkDsnpz66OfhUk3uqqiJkzqkxbWUljfo6vM3R6GTmsfd4O0iNpuEjMAXL5kAC5Bxp43209Lrk5HgS0XiWlWufAwzgEkwQZ+SmcZxjT/U1+kmgy+MAAAE00lEQVR4nO3diVoTMRSG4XA6LaBV0CqyuIsi4r6g4K643P8VOVBaO03SyTpJzjn/FdDveZ8UykxHiJYNvvRU+7q0vIR1bUmEGI22lVW+Xb+a+oePtPYmQqwfKKM8fY6UikkTMaBFxagJMSqGTUhRMW1CiYp5EzpULJqcUrlBgYpVEz2VZ5io2DWhQcW2CYVTxboJASoOTdCfKi5NsFNxa6Kl8gLDqeLYBDUV5yaIqbg30VP5XjgVnyZYqXg1qansKKm8LJqKuOgXRUul4N9VxIZvFXxUxLD/8EIkKqWeKqLfHzKV5uomfabS3GmTUyprTGW6cZOYVMp7AzpvwlRmNm0Sgsr6IxSnyv8mTGWy2SYxqZR0qjSaRKVyJ/VLNd5ckyBvQKWfKvNNmIqqCb8Bic1LiirRqLwqgYqobl5mKs2Jqtq7pqJyiy6VukmlpNIfxqLyOncqZ00iUVkrlMq4iYZK/y5JKpMm0ais3C6OyrQJU5lupomOymNqVGab6N6AqFFpNqnuMRWpCVNZUjRhKoomTEXVpGsqPzKjomwSj8rbEqhompCmomsSjcpW/lT0TehSWdBER+UN9lNlYZNqPxKVJ1lTWdykqu4TpNLWhCKV1iYEqRg0qfaV/wN64EtlpKWynHYmTbqmknpmTTqmkniGTaJR0fxam3TGTSJRERlSMW9C51SxaULlVLFqQuRUsWxC4lSxbULhVLFvUu1ip+LQBP2p4tQEORW3Jjoq77yvrV3JYK5NYlEZZDDnJrGo5DD3JrGopJ9HE7RUvJroqJyUTcWvSVX9REjFtwnGU8W7CUIqAZqgO1VCNMFGJUwTXFQCNUFFJVgTRFTCNcFDJWQTLFSCNkFCJXCTmsqweCqhm1TVpkrK8CT1C7VY6CK7yiSknfB5Mj9+35GG5WO3cEWQIBEBm2BBImL/XVzmp21hkiBCIqJ+zlYmEhGkCS4kgj+3Vy0OEt9rUdLOr0iky9sSj5HIYyTyGIm8zJCkvkbpdGGvZ/O+9HG0k/pithXX69lwX03N18fKc2iivpMU0d0Z2VxvnwuSnsN9GZ3ebpxmedy/k9FNGT3b+7wIIOnx/YCqmTeJ9XUomSHpWTTp9huWks6wSbffmZN4Zk0IIemZNekWyeH71cQzaNItkg+rVyDxWpt0jiR1kfYm3X73YwZIoK0JQSTQ0oQiEljYpNuvp84FCSxqQhQJ6JuQRQLaJnSRgKYJZSSgbkIaCaiadPs4nsNfmSEBRZNun5qRHxKQmjASmG+ifrYXKSTQbKJGEusZcJkigUaTbh8AlysSmGnCSKZb9Dwvkkhg0mSv3yWSo5yRwHkTRtKYYCTSoj1vVPMU4+yR1Ov2ubQFIKkX5/nFGiS/C0ACqibDDREJyXEJSEBuEgLJdslIQGoS7yQpBQnMNWEkZxMNJNRPkvEEI5EmGIk0MUHyh5FMJkIhOUCCBMZNGElzgpFIE4xEmmAk0nyLoENSz6+I2EKHBDyb6JB8LBgJ+DXBd5KMx0jkeSBRFjk6/pz6JXmPkcgLi+RT+UjArQlqJODURIPkLw4k4NAEOxKwb4IeCdg2GeFHApZNKCABqyY0kIBNEyJIwLwJGSRg3GSLDBIwbEIJCZg1IYUETJqMBqSQgEGTwRc1EkCKpN4/JxrmwncUYN8AAAAASUVORK5CYII="
        },
        {
          name: "Johannesburg",
          country: "África do sul",
          image: "https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          flag: "data:image/png;base64,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"
        }
      ]
    },
    {
      name: "Ásia",
      text: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
      image: "/Asia.jpg",
      countries: 65,
      languages: 90,
      cities: [
       
        {
          name: "Tokyo",
          country: "Japão",
          image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
        },
        {
          name: "Hong Kong",
          country: "China",
          image: "https://images.unsplash.com/photo-1532270239525-86620e182354?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
          flag: "https://www.estudopratico.com.br/wp-content/uploads/2016/02/bandeira-china-1-1200x675.jpg"
        },
        {
          name: "Tokyo",
          country: "Japão",
          image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
        },
        {
          name: "Hong Kong",
          country: "China",
          image: "https://images.unsplash.com/photo-1532270239525-86620e182354?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
          flag: "https://www.estudopratico.com.br/wp-content/uploads/2016/02/bandeira-china-1-1200x675.jpg"
        },
        
        
      ]
    }
  ]
  const continente = continentes.find((continente) => (continente.name.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")) === continenteName)
  return {
    props: {
      continente
    },
    redirect: 60 * 30
  }
}