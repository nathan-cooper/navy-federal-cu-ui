import { styles } from "ncooper-ui";
import SectionContainer from "../components/SectionContainer";
import { Box, Typography, styled } from "@mui/material";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import loginGraphic from "../assets/login_graphic.png";
import { Link } from "react-router-dom";

const HContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "7rem"
});

const VContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "1rem 0",
    gap: "1rem"
});

const LoginContainer = styled(Box)({
    width: "100%",
    minWidth: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "1rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    height: "fit-content",
    padding: "1rem 2rem"
});

const LoginImage = styled("img")(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("lg")]: {
        maxWidth: "30rem"
    }
}));

const LoginHeading = styled(Typography)({
    fontSize: "2rem",
    fontWeight: "bold",
    color: styles.blue
});

const LoginButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 3rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.75rem",
    width: "100%"
});

const Divider = styled(Box)({
    width: "100%",
    height: "1px",
    backgroundColor: "lightgray"
});

const LoginPage = () => {
    return (
        <>
            <SectionContainer color={styles.blue} padding="4rem 0 4rem 4rem">
                <HContainer>
                    <LoginImage src={loginGraphic} />
                    <LoginContainer>
                        <LoginHeading>Login</LoginHeading>
                        <VContainer>
                            <Input label="Username" />
                            <Input label="Password" />
                            <Checkbox label={<span>Remember Me</span>} />
                            <LoginButton>Log In</LoginButton>
                            <div style={{width: "100%"}}>
                                <Divider />
                                <Link to="/password-reset"
                                    style={{color: "gray", textDecoration: "underline"}}
                                >Forgot Your Username/Password?</Link>
                            </div>
                        </VContainer>
                    </LoginContainer>
                </HContainer>
            </SectionContainer>
        </>
    )
};

export default LoginPage;