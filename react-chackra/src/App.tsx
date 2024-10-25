import { Flex } from "@chakra-ui/react";
import DemoDrawer from "./myComp/drawer";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <div>
      <Flex
        bgColor={"teal"}
        h={"60px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        _hover={{ bgColor: "blue.400" }}
        px={"20px"}
      >
        <DemoDrawer />
        <Avatar />
      </Flex>
    </div>
  );
}

export default App;
