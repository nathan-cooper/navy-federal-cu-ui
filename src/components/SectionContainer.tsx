import { Box, BoxProps, styled } from "@mui/material";

const SectionOuterContainer = styled(Box)({
    width: "100%",
    padding: "0 5rem",
    boxSizing: "border-box",
});

const SectionInnerContainer = styled(Box)({
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
});

interface SectionContainerProps {
    align?: string;
    padding?: string;
    gap?: string;
    color: string;
    children?: React.ReactNode;
    outerProps?: BoxProps;
    innerProps?: BoxProps;
}

const SectionContainer = ({ align = "center", padding = "0", gap, color, children, outerProps, innerProps } : SectionContainerProps) => {
    const { sx: outerSx, ...outerRest } = outerProps || {};
    const { sx: innerSx, ...innerRest } = innerProps || {};
    
    return (
        <SectionOuterContainer sx={{ backgroundColor: color, ...outerSx }} {...outerRest}>
            <SectionInnerContainer sx={{ alignItems: align, padding, gap, ...innerSx }} { ...innerRest }>
                { children }
            </SectionInnerContainer>
        </SectionOuterContainer>
    )
};

export default SectionContainer;