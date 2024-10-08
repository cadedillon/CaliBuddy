//import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Heading, Card } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserProfileContext } from "../../contexts/UserContext";

//const userName = useContext

const AccountCard = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { profile, updateProfile } = useContext(UserProfileContext);

  const handleLogout = () => {
    // Clear any authentication tokens (if applicable)
    localStorage.removeItem("authToken"); // Example of clearing token

    // Redirect to landing page
    navigate("/");
  };

  return (
    <Card p={5} mb={6} bg={theme.colors.primary}>
      <Flex justify="space-between" align="center">
        <Heading size="lg" color={theme.colors.text}>
          Welcome, <i>{profile.username}</i>
        </Heading>
        <Button
          onClick={handleLogout}
          background={theme.colors.secondary}
          _hover={{
            color: theme.colors.accent,
          }}
          color="white"
        >
          Log Out
        </Button>
      </Flex>
    </Card>
  );
};

export default AccountCard;
