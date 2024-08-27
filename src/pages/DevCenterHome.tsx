import { Card, PageContainer, Tile } from "ncooper-ui";
import { Box, Grid, Typography, styled } from "@mui/material";
import heroImg from "../assets/hero_graphic_1.png";
import { styles } from "../constants/style.constants";
import { DEV_CENTER_CARD_DATA, DEV_CENTER_TILE_DATA } from "../constants/devCenterHome.constants";
import SectionContainer from "../components/SectionContainer";

const HContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0 0 0",
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

const DevCenterHeading = styled(Typography)(({theme})=>({
    fontSize: "3rem",
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    [theme.breakpoints.down("lg")]: {
        fontSize: "2rem"
    }
}));

const DevCenterSubHeading = styled(Typography)(({theme})=>({
    fontSize: "2rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    margin: "3rem 0",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}))

const HeroImg = styled("img")(({theme})=>({
    width: "100%",
    [theme.breakpoints.down("lg")]: {
        maxWidth: "30rem"
    }
}));

const DevCenterButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 3rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem"
});

const GetStartedButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem",
    margin: "3rem 0 5rem 0"
});

const DevCenterHome = () => {
    return (
        <PageContainer>
            <SectionContainer color={styles.blue}>
                <HContainer sx={{ marginTop: "5rem" }}>
                    <VContainer>
                        <DevCenterHeading>Assisting developers in crafting cutting-edge digital experiences</DevCenterHeading>
                        <DevCenterButton>GET STARTED</DevCenterButton>
                    </VContainer>
                    <HeroImg src={heroImg} />
                </HContainer>
            </SectionContainer>
            <SectionContainer color={styles.lightBlue}>
                <Grid container sx={{ margin: "3rem 0", boxSizing: "border-box", justifyContent: "center" }} columnSpacing={"1rem"} rowSpacing={"1rem"}>
                    {DEV_CENTER_CARD_DATA.map((c, i) => (
                        <Grid item key={i} xs={4} lg={3}>
                            <Card
                                title={c.title}
                                description={c.description}
                                link={c.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </SectionContainer>
            <SectionContainer color="white" innerProps={{ sx: { padding: "0 6rem" }}}>
                <DevCenterSubHeading>Why you should use our API for <br /> your financial service</DevCenterSubHeading>
                <Grid container rowGap={5} columnSpacing={3} sx={{ margin: "2rem" }}>
                    {DEV_CENTER_TILE_DATA.map((t, i) => (
                        <Grid item key={i} xs={4} >
                            <Tile
                                title={t.title}
                                description={t.description}
                                icon={t.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
                <GetStartedButton>GET STARTED</GetStartedButton>
            </SectionContainer>
        </PageContainer>
    )
}

export default DevCenterHome;