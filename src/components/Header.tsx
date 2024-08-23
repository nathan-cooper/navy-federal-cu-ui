import { Box, Typography, styled } from "@mui/material";
import headerLogo from "../assets/Navy_Federal_Credit_Union_Logo.svg";
import { styles } from "../constants/style.constants";

const HeaderOuterContainer = styled(Box)({
    width: "100%",
    boxSizing: "border-box",
    padding: "1rem 5rem",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    borderBottom: `2px solid ${styles.orange}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
});

const HeaderContainer = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    justifyContent: "space-between",
    backgroundColor: "white",
    maxWidth: "1250px"
});

const HeaderBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
});

const HeaderVBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: `1px solid ${styles.blue}`,
    borderLeft: `1px solid ${styles.blue}`,
    padding: "0 1rem 0 0.5rem"
});

const HeaderTitle = styled(Typography)({
    fontSize: "2rem",
    fontWeight: "bold",
    color: styles.blue
});

const HeaderLogo = styled("img")({
    height: "5rem"
});

const HeaderTextSm = styled(Typography)({
    fontSize: "0.6rem",
    color: styles.blue,
    fontWeight: "bold"
});

const HeaderLink = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
});

const HeaderButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem"
});

const Header = () => {
    return (
        <HeaderOuterContainer>
            <HeaderContainer>
                <HeaderBox>
                    <HeaderLogo src={headerLogo} />
                    <HeaderVBox>
                        <HeaderTextSm>ARMY</HeaderTextSm>
                        <HeaderTextSm>MARINE CORPS</HeaderTextSm>
                        <HeaderTextSm>NAVY</HeaderTextSm>
                        <HeaderTextSm>AIR FORCE</HeaderTextSm>
                        <HeaderTextSm>SPACE FORCE</HeaderTextSm>
                        <HeaderTextSm>COAST GUARD</HeaderTextSm>
                        <HeaderTextSm>VETERANS</HeaderTextSm>
                    </HeaderVBox>
                    <HeaderTitle>Developer Center</HeaderTitle>
                </HeaderBox>
                <HeaderBox sx={{ gap: "2rem" }}>
                    <HeaderLink>API marketplace</HeaderLink>
                    <HeaderLink>API access guide</HeaderLink>
                    <HeaderLink>Resources</HeaderLink>
                    <HeaderLink>Sign up</HeaderLink>
                    <HeaderButton>Login</HeaderButton>
                </HeaderBox>
            </HeaderContainer>
        </HeaderOuterContainer>
    )
};

export default Header;