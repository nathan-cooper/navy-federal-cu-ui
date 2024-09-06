import { Box, Grid, Typography, styled } from "@mui/material";
import SectionContainer from "../components/SectionContainer";
import { ACCOUNT_AGGREGATION_API_BENEFITS, ACCOUNT_AGGREGATION_API_HIGHLIGHTS, ACCOUNT_AGGREGATION_API_STEPS_TILE_DATA, ACCOUNT_AGGREGATION_API_USE_TILE_DATA } from "../constants/devCenterHome.constants";
import folderIcon from "../assets/folder_icon.png";
import moneyGraphic from "../assets/money_jar_graphic.png";
import securityGraphic from "../assets/security_graphic.png";
import DataPoint from "../components/DataPoint";
import { Tile, styles } from "ncooper-ui";
import { useNavigate } from "react-router-dom";
import SubHeader from "../components/SubHeader";

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "left",
    width: "100%",
    height: "100%",
});

const HContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
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

const Divider = styled(Box)({
    width: "100%",
    height: "1px",
    backgroundColor: styles.blue
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

const DevCenterSmallHeading = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const BlackText = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    textAlign: "left"
});

const GetStartedButton = styled("button")({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem",
    width: "fit-content"
});

const AccountAggregationApiPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <SubHeader />
            <Divider />
            <SectionContainer color="white" align="flex-start" padding="3rem 0" gap="1rem">
                <DevCenterSubHeading>What is an Account Aggregation API?</DevCenterSubHeading>
                <BlackText>
                    An Account Aggregation API is a type of software interface that enables developers to access and integrate data from mulitple
                    financial accounts into a single application or dashboard. This technology provides a way for users to easily view and manage all their
                    financial accounts, regardless of the institution, in one place.
                </BlackText>
                <BlackText>
                    The Account Aggregation API essentially acts as a bridge between the application and hte financial institution, providing a secure and
                    seamless way to gather data from different sources. With this API, developers can build powerful funancial management tools that
                    enable users to see their accoutn balances, transaction history, and other financial information in real-time.
                </BlackText>
                <DevCenterSmallHeading>Benefits of Using an Account Aggregation API</DevCenterSmallHeading>
                {ACCOUNT_AGGREGATION_API_BENEFITS.map((b, i) => (
                    <DataPoint key={i} title={b.title} description={b.description} icon={folderIcon} />
                ))}
            </SectionContainer>
            <Divider />
            <SectionContainer color="white" padding="3rem 0">
                <HContainer sx={{ gap: "3rem" }}>
                    <VContainer sx={{ alignItems: "center" }}>
                        <img src={moneyGraphic} />
                        <img src={securityGraphic} />
                    </VContainer>

                    <VContainer sx={{ flexShrink: "0.5" }}>
                        <DevCenterSubHeading>Product Highlights</DevCenterSubHeading>
                        <BlackText>Integrating Account Aggregation API offers you:</BlackText>
                        {ACCOUNT_AGGREGATION_API_HIGHLIGHTS.map((b, i) => (
                            <DataPoint key={i} title={b.title} description={b.description} icon={folderIcon} />
                        ))}
                    </VContainer>
                </HContainer>
            </SectionContainer>
            <SectionContainer color="white" padding="0 0 3rem 0" gap="1rem">
                <DevCenterSubHeading>How your company can use Account Aggregation API</DevCenterSubHeading>
                <Grid container rowGap={5} columnSpacing={3} sx={{ margin: "2rem" }}>
                    {ACCOUNT_AGGREGATION_API_USE_TILE_DATA.map((t, i) => (
                        <Grid item key={i} xs={4} >
                            <Tile
                                title={t.title}
                                description={t.description}
                                icon={t.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
                <GetStartedButton onClick={() => navigate("/nfcu-offerings/account-aggregation-api/get-started")}>GET STARTED</GetStartedButton>
            </SectionContainer>
            <SectionContainer color="white" padding="0 0 3rem 0" gap="1rem">
                <DevCenterSubHeading>How Does an Account Aggregation API Work?</DevCenterSubHeading>
                <Grid container rowGap={5} columnSpacing={3} sx={{ margin: "2rem" }}>
                    {ACCOUNT_AGGREGATION_API_STEPS_TILE_DATA.map((t, i) => (
                        <Grid item key={i} xs={4} >
                            <Tile
                                title={t.title}
                                description={t.description}
                                icon={t.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
            </SectionContainer>
        </Container>
    )
};

export default AccountAggregationApiPage;