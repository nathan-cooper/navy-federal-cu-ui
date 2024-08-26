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
    boxSizing: "border-box"
});

interface SectionContainerProps {
    color: string;
    children?: React.ReactNode;
    innerProps?: BoxProps
}

const SectionContainer = ({ color, children, innerProps } : SectionContainerProps) => (
    <SectionOuterContainer sx={{ backgroundColor: color }}>
        <SectionInnerContainer { ...innerProps }>
            { children }
        </SectionInnerContainer>
    </SectionOuterContainer>
);

export default SectionContainer;