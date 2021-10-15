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
                    <Tooltip closeOnClick={false} hasArrow  label="100 cidades mais visitadas do mundo">
                      <span><Icon mb="3px" ml="10px" as={AiOutlineInfoCircle} /></span>
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
      { params: { continenteName: "asia" } },
      { params: { continenteName: "america" } },
      { params: { continenteName: "oceania" } }
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
    },
    {
      name: "América",
      text: "América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas.",
      image: "/America.jpg",
      countries: 34,
      languages: 45,
      cities: [
       
        {
          name: "Rio de Janeiro",
          country: "Brasil",
          image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://cdn.awsli.com.br/600x700/1677/1677907/produto/83123394/ce4b2fd5a5.jpg"
        },
        {
          name: "Cancún",
          country: "México",
          image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
          flag: "data:image/png;base64,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"
        },

        {
          name: "São Paulo",
          country: "Brasil",
          image: "https://images.unsplash.com/photo-1551736947-ca1f44a894e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80",
          flag: "https://cdn.awsli.com.br/600x700/1677/1677907/produto/83123394/ce4b2fd5a5.jpg"
        },
        
        {
          name: "Nova York",
          country: "Estados Unidos",
          image: "https://images.unsplash.com/photo-1516577165541-1ed0fe9f23de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg"
        },
        {
          name: "Rio de Janeiro",
          country: "Brasil",
          image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://cdn.awsli.com.br/600x700/1677/1677907/produto/83123394/ce4b2fd5a5.jpg"
        },
        {
          name: "Cancún",
          country: "México",
          image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
          flag: "data:image/png;base64,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"
        },

        {
          name: "São Paulo",
          country: "Brasil",
          image: "https://images.unsplash.com/photo-1551736947-ca1f44a894e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80",
          flag: "https://cdn.awsli.com.br/600x700/1677/1677907/produto/83123394/ce4b2fd5a5.jpg"
        },
        
        {
          name: "Nova York",
          country: "Estados Unidos",
          image: "https://images.unsplash.com/photo-1516577165541-1ed0fe9f23de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://static.todamateria.com.br/upload/ba/nd/bandeira_americana_bb.jpg"
        },
         
        
        
      ]
    },
    {
      name: "Oceania",
      text: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville",
      image: "/Oceania.jpg",
      countries: 34,
      languages: 45,
      cities: [
       
        {
          name: "Sidney",
          country: "Australia",
          image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
          flag: "data:image/png;base64,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"
        },
        {
          name: "Sidney",
          country: "Australia",
          image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
          flag: "data:image/png;base64,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"
        },
        {
          name: "Sidney",
          country: "Australia",
          image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
          flag: "data:image/png;base64,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"
        },
        {
          name: "Sidney",
          country: "Australia",
          image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
          flag: "data:image/png;base64,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"
        },
        {
          name: "Sidney",
          country: "Australia",
          image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
          flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAA8FBMVEUAJnj////5AAL5AAAAInf9vr4AFnMoO4EkOH/8r6/9uLgAHXWHjrAAJHcAIXYAAG7/AABbZpcAGnRZIWkAEHEACHAAAGoAEnIADHAAFXN5Hl/8oaHu7/MAAGZ8hKoABW/+4uL6Tk7s7fJveKK0uMz90ND/9PT5KChEUowuQIPKzdvj5Ov7eHjT1eFUYJReaZn9yMi8v9H6XV2Xnbr+2tr5Fxf7iYn8l5f7goIbMn2mq8N0fKU6SYj5MzP6QUH7enr+7Oz8p6f6Z2dbdqT7bGz5IiN7ZpD7kJD6R0ePlbX6VFRYAFxZNXRaTIQrJHM/Top0WZs+AAAOfElEQVR4nO2dfWOiuBbGTaGopZCVVYpX8A21KgWL1rZa27Hdznbs3r39/t/mEl6UWEQQrM5Mfn/sdl0J8SEnOTnJCZmTE6oNcBaKxGWiw9gX5akTH9QZ+uyciVEMx8KMZhd1/WiXRVHUN1AVYhTxhVjVGw8ruG6aeSHRkUtIRzaGMzRbteGQohzR6nVwtLJZdbRq+HaHC9dvTWpRS0hDNl580NEV9cq7K9rweY4+OFbZXl8oW7mT/JqptsRSNFNNLJtlnrmmXcgN5Yr2/cqtxbHKBkB77Ah3f4V3cv2+eMFHKCGpbIxU6NvmefXimedbHRy5bC0TgNO7sW2q1OkpJpy++BC2t7hksvFi1dbs5vTRFe31dlUDsxDlwR2AktBt+qzjuYOb6ozeaqpJZBNgzzHPtleBcd139ylkU/qZqcMJvVEf1M+eHFO9XB8cTIYJf+K7yyZAtSWjL556o+f7mU+1xQLGcYS+Gv4CtvqWu3T16AyrZ9eYcNqDwYS5I7vKxorVc9s8nZZm/eP1dXVXuSUV47h9h4CTRNXqYebU2Kn/yw3e5LqT4uYWt5tsDGvYLgdAI7l910f/TUcfR93SlgjiwGpx4N178mv+yHTGbOpmdpDNcjmqjp/maUa9+Ju4EW0M3w0+omMVEUFqWS2u3Xhyupl8HdNN7nbLwdfFl43jjIUt2g3lTKOeGr6bNTXjIs3ftQY/609S1c0y1apV7c53Z3CgXtcmq4ZSDLosrmwCVEz0fzu33uj55L/LqLff4bNmgkHaj0WAH8hUby/d7gYfHMBUYT8bTyzZOB66fto3z7f1uWlAzsI9mieCnli9Qzfte3CsOLWqPx9fOl3O8AZz5LRu75OpxpGNy2RHdkvz/LTHS595yqAXwb3emWLRshZhYN2oZf3BpDxQF0VUMvjhddb4zAGo4lpYKbJs1kCgOKNnxSt7iLVlQdxnSxNa0xYUFdm2GqgspqOUHRwm20OGdPfo/Ljv97hwLVjzCxdRNk4oD2RU5/qr2wU8PfvNczpJd4T7hGB5ibJdA/ffqZsqzYuq1S7mz54feoXpZk3yfYJEk42GBbulVe4pZ8S5uvaZv16d1aJH+HZE1PBfwe7hMQmwi8oeeub0hvsjo1UEOIpsPOScgWDp22JzuL4ifMGUXWphP0HdT3BF6HY1FDi8dDrvy8aZ/6aaeVFy2sd22QQ4a6IZ+3Nj7Iyej3lfS5OnRrqO1CY4aPp7BXFPt+GFrDXJB538levIVbDgeb+VsSf522QTxAd7wn735hZzi81ARhNpH9YSQJn2W6mshM60k0AXhR7qkd6uXCfrtu33RzTVsGaO4bKxUEUNbd72irjya6+3hOLe+zQHtyI+qtm99QycMziA9tDt435gd5ZNWJRCZBOgM2GvPHmiYUGChfhVomW8yIGf5obpYioI0ER9wtu925vfYTamj3qbZVOqtnObv/XGFWwgaClfGBniu+a6bq3W+T5D7lypNLX9uMaJ26Of+odVeaNsI9s8524McvyCGfi0B/dY58/wpcnHVF7dX59dSHteqOCKjqlee5Nvai0GHCwbwvOZqXvMPFUxJIK3J2geDpYVUGCigYiOCCOixRpwa3uraDi8xlcdAmXrXH/zRPMPBM2+CiPeNt0xVlCXdUjofmQjk7mw3cXK+BIxpoan22TrXDoSj8eYyzc16EnUm6br0TFV+/bIcMrJxqJ1Y9uVANnmbxWH+tarN5Jupy1aJc6gIBqW11lKVNIeZUuDdJeXRXDey1jtl8lNj1O20+1XRCJd2YTzD2cgoKGaLIR8mhL3uGy3KRX7d7oBcmHZoyUsl0qLE4yUCv3jP0mF2hMnRw2RbSeIbDtxQNnCJxGHFiacw8kmDEJnKIcWJpyDyUb3gBkWaji0MOEcTDY+B+Swla1DCxPOAWTj7PiBvcolev/1mUMLE87Xy8blcrmM5ESYlGKRzWUzQbodWphwvl42oQqANkJLTwCMpiMTyNmgWMmhhQnnAEYKF/iseBG4zSqlWdCvM7lCzc2PEvitlCIV4OxniIBEAo78FRgEVyCln/dzxNsiwfT8FVClwC8l+U2dOyd6+9YOle3Z/drzDrfY65JcECycyf4K9FUxaEjIRSczO/dr1j4Zuz0QCnqHyNbJu9/7PrwBspqho98y5bWECKoV+utPTpsEuL1RV65oAS78WyhOvT3ljba9VBBqpNfX7gIW9W1u53JFvutX77KHWFNzkIPtNAI0I3b9Jc1Pllll7idb+rabK8rbKwfQNq89bwHcHaiY/n1JQH9Qdl4Gl3LnTd9juP7x6CZIzefeZ1uHhPqp46VQjcYcNM1yKenuD2lP69NSsbv8rdNuZucNF6wy8u/VyXs7b1/ySLTRaKNs5gJr8tdnXhO9r4O+mUm2cUUye3vSjROX1R7VdrWKMlpVXNGmXNEunR29VQg3ynYuZvHtKvVXyktOBqD5ICZYdOMUIO9rE4ktm53jGjxF2IpwARf6qsl0XpabUu9s8xyoJS5sfxsvqiomXLvhFjB86QC9D3fdCcIxo73Jhtbu9YE4sWou8/FbG8fW1NHU95Pz3jaYK3vnjLZQBHbbbkpBMlrYVuN2xS3lMX8D9NHHxlyujbAIFKKYSujv1E21OAUthc3QkmECLrZsbNHwT8/qy0zZd5S3ImsPE6cFb9uEytYyGiZc50fDEe7k3Wqy3bgZVqxhYac5ARoWjELq++SZRd/ZWMPWWnH9RquVYI5f3hPNzf2bid5S7fYtzzSEa1vyTj1bv7eEG4hbEn1xbNfK2fRt+wpa6rbKeH0uV4ylGsfDB39Lay8zZZ3UDr2fXU16IuUlwFkfa3H1+4b7GNptoFUNho/sj5QwvwpoR+MCcnTWN43qdIbL0dMZCNQJ9DWPaOkcPMxomDvSOf3uZSd1LFPtTaL2cewHJttot8EudVhG8T9PN1MW/T47UbI5EQWsZUTNuaKhgudTgGc3i8hO8pNzUU0VYsUYx3AKAceVVL95okR2R7PHIcqS1DRhvZrRM/w4Pofn78yHtj9iTdFuOkAuGJESvTnRL5ucdBNMGgg10R8Tnt8vW1rFOTuHgZ/6oBiJkd52fZ+pXju6Ue/oir6yPZtUEFtYfkETFg8snJO9vMTNwDhxQ0NAO1eYgOYQL3tZgMpasP75hy8Dc9oVwyNsRdx9RpiDQ+rm5Movm0HlfewoQV3O3YEg2MGKnStfNh7wFjf/5jTpRgP5g9XPDXoFW5DXcllQ0tY+c+vDcU9m8PANBM7RVuZg09lk8Y8YYEuDtWDgiztU21nzrUlItjwLlXOsgxxVxUOp5p4DssT1bZHL4WSyVzlho+3scg6IINBrC0R5Z3A4odDG/ZYBQ+I15fLqWrNcTB4239Hx46Dpf/p3V55qbuRWVUshYdadjk/h6NraJL/TvnUGh+HrHMj6ecj5ccxKtlbkY+bC2EG3VQa7w83KPBvOA+2GD1W7HtYjoKkyrpw7yR+jbmGhlDbd1lnKnKKrW8lnVuxgh6T5ktDVfJ1s5Wk5ELzNUZ6LPrvYMk7tfjQUy8xwP67TebWFu3yyTLVpdjf4cUi2/gdkZiB5wrtUUjSglOLGmrHI+e0t7qfJC1XcmpqU4CAyjhXVc0w4cPbmrHI1UMTAlIIPYKmCBc1aPfJikXSSIJmm5Ty3zH4unm6rCl+vBoJv7oR9IkWoVLJj7wSph0/yQf7e9YCtSX7w8jKrGs78vVzTP5K1tpLbqeuBG2Q2s6zt3VK0Eyd9T6fDHKgVSQ9ZtCb5a2Gl+j3lnl64YVWe9Z4mV0sabFNs3WQlppG6ppFfTgioip26ZxrRREvjJFRaLEzxFlepOC3u+e+9p0+iUGDgCnIoqJI3z8uWNrxFomla7tOMfSNpHCDLlng8AgzOht+pr9ioxRrxaupiXbN006yna1e5D2GMpYd0jiv+HAGuf8lGLeuush4/vfQ0/4fH5Z19gJaZjXdQn+DI9geGvVFrEesZcnC25sfl7/YuG/8hP4iiAYyYVvrPP396/PevQaFQGMCYJdDoqsK/f2L8i0rqxexneWgXtWTw15//i1dCbOjeQLIMxujuvkeAs1fS4vtB9lVrt+UDPotalI/YBcSGtu8RfSWDQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCIk50jfXHjm16uHyA35ehCrYV9L/r0ypCqZf++aIXwG2sMv2ut8e+yVS2r5eHvWLQUNRhOiVaHQOZTfYp4fSgiQmOeLj14fOyuisrhlkRTcnRJRgTm0lfo3DL45knxPS1Je5jkrLSTMgsoWigEA08VjOSzhOmPNA2RbE8w2F7n3KJkZ0jyDx/6hhYZBqxH/bxkXrk2r9Lz8c8aeDFT+/ilGjyeQ0FBoa/U+qodyvIzlC5yhhi5kg0YB9thtDwm/BlAfnAeetelQfiG5BsMZmzRBNEkYKgp5Np9ONmo2mJIoUDF28KOcyU13HPV5d183MRCoS1TZD08X1c9nKEIYdt0JwkXDZBJJlGIk12cydjy7/vXBl09zXWuhkBI2EI9uiVmQGRLbIcEUkm9bjM/wEzU91iYwHEbDd3oH97g8aotcqHOAFLts5uuAC2wVmzzvFX8hOj1K2i6MLAdLZke+VDzRcJDyuaR8ID8dxQK8fGj8gNdYJ4V8Dx+nAJGtpcaFzYNP70QiBWDM9QbDflKZK1h+Q+OJRgBowB2oBLXnrA3WgkzlMJOi1Y8zBx7GNDMfJ2vlmctzzqn5TeOy9ZnLk1zL87mDvaVXjnU3320JfYIciTx9iH0P5OyJwg7VFDoPkAWzlImiJ6BinzMcF3/2oYm/uaTYHHx9kLN0GzzNid9XkRj0okAMVo1FeLYPzxP2IjLN7wDZVmrS0yNjbsgsK2pRNNgpEB8pAnzAZZtIkq0MxgMAcIJ+j/FDVU3kHym8CdF+PIjBENQKBQCAQCAQCgUAg/Oz8H//hZVNEJS+yAAAAAElFTkSuQmCC"
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