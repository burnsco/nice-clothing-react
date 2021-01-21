import { Text } from "@chakra-ui/react"
import Container from "@components/container"
import { NextChakraLink } from "@components/next-chakra-link"
import { useAuth } from "@hooks/auth"

export default function IndexPage() {
  const { user } = useAuth()

  return (
    <Container style={{ padding: "40px" }}>
      <Text>{`User ID: ${user ? user.uid : "no user signed in"}`}</Text>

      <p>
        <NextChakraLink href="/authenticated">
          Go to authenticated route
        </NextChakraLink>
      </p>
      <p>
        <NextChakraLink href="/login">Login</NextChakraLink>
      </p>
    </Container>
  )
}
