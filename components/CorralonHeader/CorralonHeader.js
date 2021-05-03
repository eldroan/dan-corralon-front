import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Heading,
  Flex,
  Icon,
  Avatar,
  HStack,
  Button,
  Divider,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { MdDirectionsBus } from "react-icons/md";

/**
 * @param {{onMobileBackPressed: VoidFunction, isBackVisible: boolean}} props
 */
export default function CorralonHeader({
  onMobileBackPressed,
  isBackVisible,
  heigth,
}) {
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
            <Icon as={MdDirectionsBus} boxSize={8} />
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
    </>
  );
}
