import { Box, Typography, styled } from "@mui/material";
import { styles } from "ncooper-ui";


const Container = styled(Box)({
    width: "100%",
    maxWidth: "24rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
});

const Label = styled(Typography)({
    color: styles.blue,
    fontSize: "0.75rem",
    fontWeight: "bold"
});

const StyledInput = styled("input")({
    width: "100%",
    height: "2.5rem",
    border: `1px solid lightgray`,
    borderRadius: "0.2rem",
    padding: "1rem 0.5rem",
    fontSize: "1.25rem",
});

export interface InputProps {
    label: string;
}

const Input = ({ label } : InputProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput />
        </Container>
    );
}

export default Input;