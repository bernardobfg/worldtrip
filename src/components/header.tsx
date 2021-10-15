import Link from "next/link"
import { Flex, Image } from "@chakra-ui/react";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100"
      align="center"
      justifyContent="center"
    >
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" cursor="pointer" />
      </Link>
    </Flex>
  )
}