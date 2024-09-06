import { Box, Typography, styled } from "@mui/material";
import { Form, Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { styles } from "ncooper-ui";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

const DevCenterSubHeading = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const HContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "1rem 0 0 0",
    gap: "3rem"
});

const BoldGray = styled(Typography)({
    fontSize: "1rem",
    color: "gray",
    fontWeight: "bold"
});

const Divider = styled(Box)({
    width: "100%",
    height: "1px",
    backgroundColor: "gray"
});

const DevCenterButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 3rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.75rem"
});

const SignupPage = () => {

    return (
        <>
            <SectionContainer color="white" align="flex-start" gap="1rem" padding="1rem 0">
                <DevCenterSubHeading>Create Your Account</DevCenterSubHeading>
                <BoldGray>Sign up for Gateway account to begin experimenting with our APIs in the Sandbox</BoldGray>
            </SectionContainer>
            <Divider />
            <Form method="post" style={{ width: "100%" }}>
                <SectionContainer color={"#F5F5F5"} align="flex-start" gap="1rem" padding="1rem 0 3rem 0">
                    <HContainer>
                        <Input label="First Name" />
                        <Input label="Last Name" />
                    </HContainer>
                    <HContainer>
                        <Input label="Work email" />
                        <Input label="Company" />
                    </HContainer>
                    <HContainer>
                        <Input label="Phone" />
                        <Input label="API products you are interested in" />
                    </HContainer>
                    <Checkbox 
                        label={
                            <span>
                                I accept the NFCU Exchange{" "} 
                                <Link to="/terms-of-use" style={{color: styles.orange, fontWeight: "bold", textDecoration: "underline"}}>
                                    Terms of use
                                </Link> 
                                    {" "}and{" "}
                                <Link to="/privacy-policy" style={{color: styles.orange, fontWeight: "bold", textDecoration: "underline"}}>
                                    Privacy Policy
                                </Link>
                            </span>
                        }
                    />
                    <DevCenterButton>Create Account</DevCenterButton>
                </SectionContainer>
            </Form>
        </>
    )
};

export default SignupPage;