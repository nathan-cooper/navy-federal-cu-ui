import { Box, Typography, styled } from "@mui/material";
import { styles } from "../constants/style.constants";


const CardContainer = styled(Box)({
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left"
});

const TileTitleText = styled(Typography)({
    fontSize: "1.6rem",
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    margin: "1rem 0"
});

const TileDescriptionText = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    textAlign: "left"
});

const TileIcon = styled("img")({
    width: "5rem",
    height: "5rem",
});


export interface DevCenterTileProps {
    title: string;
    description: string;
    icon: string;
}

const DevCenterTile = ({ title, description, icon }: DevCenterTileProps) => {
    return (
        <CardContainer>
            <div>
                <TileIcon src={icon} />
                <TileTitleText>
                    {title}
                </TileTitleText>
                <TileDescriptionText>
                    {description}
                </TileDescriptionText>
            </div>
        </CardContainer>
    )
};

export default DevCenterTile;