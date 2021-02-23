import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { FaShoppingBag } from "react-icons/fa"

export const sections = [
  {
    id: "burgers-link",
    title: "burgers",
    href: "/shop/burgers",
    pathname: "/shop/[category]"
  },
  {
    id: "chicken-link",
    title: "chicken",
    href: "/shop/chicken",
    pathname: "/shop/[category]"
  },
  {
    id: "pizza-link",
    title: "pizza",
    href: "/shop/pizza",
    pathname: "/shop/[category]"
  },
  {
    id: "sushi-link",
    title: "sushi",
    href: "/shop/sushi",
    pathname: "/shop/[category]"
  },
  {
    id: "sandwiches-link",
    title: "sandwiches",
    href: "/shop/sandwiches",
    pathname: "/shop/[category]"
  }
]

export default function NavMenu() {
  const router = useRouter()
  console.log(router)
  const bg = useColorModeValue("whitesmoke", "#202020")

  const navCat = () => {
    if (router.asPath === "/") {
      return "MENU"
    }
    const route = router.query.category as string
    return route[0].toUpperCase() + route.substring(1)
  }

  return (
    <Menu matchWidth aria-label="Mobile Navigation">
      {({ isOpen }) => (
        <>
          <MenuButton
            colorScheme="telegram"
            as={Button}
            leftIcon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
            rightIcon={<FaShoppingBag />}
            flexGrow={2}
            maxW={{ base: "sm", md: "md" }}
          >
            {isOpen ? "Browse Food" : navCat()}
          </MenuButton>
          <MenuList bg={bg}>
            {sections.map(sec => (
              <NextLink
                key={`nav-dropdown-${sec.title}`}
                href={{
                  pathname: `${sec.pathname}`,
                  query: { category: `${sec.title}` }
                }}
                passHref
              >
                <MenuItem as="a" href={sec.href} key={`nav-menu-${sec.id}`}>
                  {sec.title}
                </MenuItem>
              </NextLink>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}
