import { Typography, styled } from "@mui/material";
import { styles } from "ncooper-ui";
import { useNavigate } from "react-router-dom";


const Heading = styled(Typography)({
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: styles.blue,
    marginTop: "4rem"
});

const SubHeading = styled(Typography)({
    fontSize: "1.5rem",
    color: styles.blue
});

const HomeButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 3rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    marginTop: "3rem"
});

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Heading>Page Not Found</Heading>
            <SubHeading>Sorry, the page you are looking for does not exist.</SubHeading>
            <HomeButton onClick={() => navigate("/")}>Return to Homepage</HomeButton>
        </>
    )
}

export default PageNotFound;