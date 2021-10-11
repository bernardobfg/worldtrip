import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from "next/router"
import Head from 'next/head';

import { Flex, Image } from "@chakra-ui/react";
import { Header } from "../../components/header"
export default function Continent() {
  const router = useRouter()
  const { continente } = router.query
  console.log(continente)
  return (
    <>
      <Head>
        <title> worldtrip | {continente}</title>
      </Head>
      <Flex>
        <Header />
      </Flex>
    </>
  )
}
 