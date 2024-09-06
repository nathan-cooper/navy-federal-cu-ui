import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, styled } from "@mui/material";
import SectionContainer from "../components/SectionContainer";
import { Card, styles } from "ncooper-ui";
import { useState } from "react";
import IconInput from "../constants/IconInput";
import searchIcon from "../assets/search_icon.png";
import { FaPlus } from "react-icons/fa";
import { API_OFFERING_FAQ_ACCORDION_DATA, NFCU_OFFERINGS_CARD_DATA, nfcuApiIndustries, nfcuApiOfferingTypes, nfcuApiSortBy, nfcuApiTags } from "../constants/devCenterHome.constants";
import { Combobox } from "@/components/Combobox";

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
    gap: "2rem"
});

const FAQAccordion = styled(Accordion)({
    borderRadius: "0",
    boxShadow: "none",
    textAlign: "left"
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

const BoldBlack = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold"
});

const Black = styled(Typography)({
    fontSize: "1rem",
    color: "black"
});

const LinkButton = styled(Typography)({
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    textDecoration: "underline",
    fontWeight: "bold",
    cursor: "pointer"
});

const NfcuOfferingsPage = () => {
    const [search, setSearch] = useState<string>("");
    const [showMoreOfferings, setShowMoreOfferings] = useState<boolean>(false);
    const [showMoreFaq, setShowMoreFaq] = useState<boolean>(false);
    const [offeringType, setOfferingType] = useState<string>(nfcuApiOfferingTypes[0].value);
    const [industry, setIndustry] = useState<string>(nfcuApiIndustries[0].value);
    const [tag, setTag] = useState<string>(nfcuApiTags[0].value);
    const [sortBy, setSortBy] = useState<string>(nfcuApiSortBy[0].value);

    return (
        <Container>
            <SectionContainer color="white" padding="2rem 0">
                <IconInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Assets"
                    icon={searchIcon}
                />
            </SectionContainer>
            <SectionContainer color={styles.gray} align="flex-start" padding="1rem 0">
                <HContainer>
                    <Combobox value={offeringType} setValue={setOfferingType} valueList={nfcuApiOfferingTypes} />
                    <Combobox value={industry} setValue={setIndustry} valueList={nfcuApiIndustries} useSearch />
                    <Combobox value={tag} setValue={setTag} valueList={nfcuApiTags} />
                </HContainer>
            </SectionContainer>
            <SectionContainer color="white" align="flex-start" padding="2rem 0">
                <HContainer sx={{ justifyContent: "space-between" }}>
                    <DevCenterSubHeading>NFCU API offerings</DevCenterSubHeading>
                    <HContainer sx={{width: "fit-content", alignItems: "center", gap: "0"}}>
                        <Black>Sort by:</Black>
                        <Combobox value={sortBy} setValue={setSortBy} valueList={nfcuApiSortBy} buttonVariant={"ghost"} buttonSize={"sm"} />
                    </HContainer>
                </HContainer>
            </SectionContainer>
            <SectionContainer color={styles.lightBlue} padding="3rem 0 2rem 0">
                <Grid container rowGap={5} columnSpacing={3} sx={{ margin: "2rem" }}>
                    {NFCU_OFFERINGS_CARD_DATA.slice(0, showMoreOfferings ? NFCU_OFFERINGS_CARD_DATA.length : 16).map((t, i) => (
                        <Grid item key={i} xs={3} >
                            <Card
                                title={t.title}
                                description={t.description}
                                link={t.link}
                                variant="white"
                            />
                        </Grid>
                    ))}
                </Grid>
                <LinkButton onClick={() => setShowMoreOfferings((prev) => !prev)}>{showMoreOfferings ? "See less \u2191" : "See more \u2193"}</LinkButton>
            </SectionContainer>
            <SectionContainer color={styles.lightBlue} padding="4rem"
                outerProps={{
                    sx: {
                        padding: "0 1rem 3rem 1rem",
                        display: "flex",
                        justifyContent: "center"
                    }
                }}
                innerProps={{ sx: { backgroundColor: "white", margin: "0", maxWidth: "none" } }}
            >
                <DevCenterSubHeading>Frequently asked questions</DevCenterSubHeading>
                <Box sx={{
                    borderBottom: "1px solid #e5e7eb",
                    margin: "2rem 0",
                    "& .MuiPaper-root": {
                        // borderTop: "1px solid #e5e7eb"
                        border: "none",
                        borderTop: "1px solid #e5e7eb !important",
                        borderRadius: "0"
                    }
                }}>
                    {API_OFFERING_FAQ_ACCORDION_DATA.slice(0, showMoreFaq ? API_OFFERING_FAQ_ACCORDION_DATA.length : 5).map((a, i) => (
                        <FAQAccordion key={i}>
                            <AccordionSummary expandIcon={<FaPlus color="black" />}><BoldBlack>{a.summary}</BoldBlack></AccordionSummary>
                            <AccordionDetails>
                                <Typography>{a.details}</Typography>
                            </AccordionDetails>
                        </FAQAccordion>
                    ))}
                </Box>
                <LinkButton onClick={() => setShowMoreFaq((prev) => !prev)}>{showMoreFaq ? "See less \u2191" : "See more \u2193"}</LinkButton>
            </SectionContainer>
        </Container>
    )
};

export default NfcuOfferingsPage;