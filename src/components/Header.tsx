import { Box, Grid, Typography, styled, useTheme } from "@mui/material";
import headerLogo from "../assets/Navy_Federal_Credit_Union_Logo.svg";
import { styles } from "../constants/style.constants";

const HeaderOuterContainer = styled(Box)(({theme})=>({
    width: "100%",
    boxSizing: "border-box",
    padding: "1rem 5rem",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    borderBottom: `2px solid ${styles.orange}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("lg")]: {
        padding: "1rem 0.5rem"
    }
}));

const HeaderContainer = styled(Grid)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    justifyContent: "space-between",
    backgroundColor: "white",
    maxWidth: "1250px"
});

const HeaderBox = styled(Grid)({
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

const HeaderTitle = styled(Typography)(({theme})=>({
    fontSize: "2rem",
    fontWeight: "bold",
    color: styles.blue,
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const HeaderLogo = styled("img")(({theme})=>({
    height: "5rem",
    [theme.breakpoints.down("lg")]: {
        height: "3.5rem"
    }
}));

const HeaderTextSm = styled(Typography)(({theme})=>({
    fontSize: "0.6rem",
    color: styles.blue,
    fontWeight: "bold",
    textWrap: "nowrap",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.45rem"
    }
}));

const HeaderLink = styled(Typography)(({theme})=>({
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem"
    }
}));

const HeaderButton = styled("button")(({theme})=>({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem",
        padding: "0.5rem 1rem"
    }
}));

const Header = () => {
    const theme = useTheme();
    return (
        <HeaderOuterContainer>
            <HeaderContainer container rowGap={2}>
                <HeaderBox item xs={12} md={6}>
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
                <HeaderBox sx={{ 
                    gap: "2rem",
                    [theme.breakpoints.down("lg")]: {
                        gap: "1rem"
                    }
                }} item xs={12} md={6}>
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