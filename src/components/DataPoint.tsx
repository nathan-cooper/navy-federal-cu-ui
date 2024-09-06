import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%"
});

const HContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.5rem"
});

const TitleText = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    textAlign: "left",
    fontWeight: "bold"
});

const GrayText = styled(Typography)({
    fontSize: "1rem",
    color: "gray",
    textAlign: "left"
});

const DataPointIcon = styled("img")({
    height: "1.2rem"
});

export interface DataPointProps {
    title: string;
    description: string;
    icon?: string;
}

const DataPoint = ({ title, description, icon }: DataPointProps) => {
    return (
        <Container>
            <HContainer>
                <DataPointIcon src={icon} />
                <TitleText sx={{ fontWeight: "bold" }}>{title}</TitleText>
            </HContainer>
            <GrayText sx={{ color: "gray" }}>{description}</GrayText>
        </Container>
    )
}

export default DataPoint;