import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const navigateToHome = () => router.push("/home");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" p={12} rounded={6} background="gray.700">
        <Heading mb={6}>Ingresar al corralon!</Heading>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
          <Input
            placeholder="cachito@gmail.com"
            variant="filled"
            mb={3}
            type="email"
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<LockIcon />} />
          <Input
            placeholder="**********"
            variant="filled"
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement w="6rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button mt={6} onClick={navigateToHome}>
          Ingresar
        </Button>
      </Flex>
    </Flex>
  );
};
export default Login;
