import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  Flex,
  Icon,
  Avatar,
  HStack,
  Button,
  Divider,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useToast,
} from "@chakra-ui/react";
import { MdDirectionsBus } from "react-icons/md";
import { useRouter } from "next/router";

/**
 * @param {{onMobileBackPressed: VoidFunction, isBackVisible: boolean}} props
 */
export default function CorralonHeader({ onMobileBackPressed, isBackVisible }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();

  return (
    <>
      <Flex
        w="100%"
        direction="row"
        justify="space-between"
        p={[2, 2, 4]}
        alignItems="center"
      >
        <HStack>
          {isBackVisible ? (
            <IconButton
              aria-label="Volver"
              icon={<ArrowBackIcon />}
              rounded="3xl"
              onClick={() => onMobileBackPressed()}
            />
          ) : (
            <IconButton
              aria-label="Menu"
              icon={<Icon as={MdDirectionsBus} boxSize={8} />}
              rounded="3xl"
              onClick={onOpen}
            />
          )}
          <Heading pl={4}>Corralón</Heading>
        </HStack>
        <HStack>
          <Avatar src="https://url.que.no.existe" size="sm" mr={2} />
          <Button size="sm" colorScheme="red" variant="outline">
            Salir
          </Button>
        </HStack>
      </Flex>
      <Divider orientation="horizontal" w="100%" h="1px" />

      {/** Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Corralon</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody px={0} pt={0}>
            <DrawerButton
              text="Listado de pedidos"
              onClick={() => {
                onClose(); // Cerramos el drawer
                router.push("/home");
              }}
            />
            <DrawerButton
              text="Crear Pedido"
              onClick={() => {
                onClose(); // Cerramos el drawer
                toast({
                  title: "Info",
                  description: "No estoy implementado...",
                  status: "info",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const DrawerButton = ({ text, onClick }) => (
  <Button
    isFullWidth
    justifyContent="flex-start"
    onClick={onClick}
    rounded={0}
    borderBottomWidth={1}
    leftIcon={<ChevronRightIcon />}
  >
    {text}
  </Button>
);
