import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../api";
import { ROUTES } from "../constants";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(false);
  const toast = useToast();

  const router = useRouter();

  const handleSubmit = async (event) => {
    // Usamos preventDefault para evitar el comportamiento default del form que es refrescar la pagina
    event.preventDefault();

    setIsLogginIn(true);
    const result = await loginUser(email, password);
    setIsLogginIn(false);

    if (result.success) {
      // Navegamos a Home
      router.push(ROUTES.HOME);
    } else {
      toast({
        title: "Error",
        description: result.error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        p={[6, 12]}
        rounded={6}
        background="gray.700"
        mx={4}
      >
        <Heading mb={6}>Ingresar al corralon!</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input
                placeholder="cachito@gmail.com"
                variant="filled"
                mb={3}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="password" isRequired>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<LockIcon />} />
              <Input
                placeholder="**********"
                variant="filled"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
          </FormControl>

          <Button
            mt={6}
            type="submit"
            isActive={isLogginIn}
            isLoading={isLogginIn}
            loadingText="Ingresando..."
          >
            Ingresar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
export default Login;
