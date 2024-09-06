import { Box, Breadcrumbs, Typography, styled } from "@mui/material";
import { styles } from "ncooper-ui";
import { Link } from "react-router-dom";


const HeaderOuterContainer = styled(Box)({
    width: "100%",
    padding: "0 4rem",
    boxSizing: "border-box",
    backgroundColor: styles.lightBlue,
    margin: "0 auto"
});

const HeaderInnerContainer = styled(Box)({
    width: "100%",
    maxWidth: "1200px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem 0 2rem 0",
    gap: "1.5rem"
});

const DevCenterSubHeading = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const SubHeader = () => {
    return (
        <HeaderOuterContainer>
            <HeaderInnerContainer>
                <Breadcrumbs separator=">">
                    <Link to="/">Home</Link>
                    <Link to="/nfcu-offerings">NFCU API offerings</Link>
                    <Link to="/nfcu-offerings/account-aggregation-api" style={{ color: styles.blue }}>Account Aggregation API</Link>
                </Breadcrumbs>
                <DevCenterSubHeading>Account Aggregation API</DevCenterSubHeading>
            </HeaderInnerContainer>
        </HeaderOuterContainer>
    )
};

export default SubHeader;