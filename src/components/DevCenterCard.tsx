import { Box, Typography, styled } from "@mui/material";
import { styles } from "../constants/style.constants";


const CardContainer = styled(Box)({
    height: "20rem",
    backgroundColor: styles.blue,
    borderRadius: "12px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
});

const CardTitleText = styled(Typography)({
    fontSize: "1.6rem",
    color: "white",
    textAlign: "left",
    fontWeight: "bold"
});

const CardDescriptionText = styled(Typography)({
    fontSize: "1rem",
    color: "white",
    textAlign: "left",
    marginBottom: "2rem"
});

const CardDivider = styled(Box)({
    width: "3rem",
    height: "0.4rem",
    backgroundColor: styles.orange,
    borderRadius: "8px",
    marginBottom: "1rem"
});

const CardButton = styled("button")({
    backgroundColor: styles.medBlue,
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem"
});


export interface DevCenterCardProps {
    title: string;
    description: string;
    link: string;
}

const DevCenterCard = ({ title, description }: DevCenterCardProps) => {
    return (
        <CardContainer>
            <div>
                <CardTitleText>
                    {title}
                </CardTitleText>
                <CardDivider />
                <CardDescriptionText>
                    {description}
                </CardDescriptionText>
            </div>
            <CardButton>
                Learn more
            </CardButton>
        </CardContainer>
    )
};

export default DevCenterCard;