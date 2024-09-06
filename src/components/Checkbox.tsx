import { Box, styled } from "@mui/material";

const Container = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.5rem"
})

const StyledCheckbox = styled("input")({
    width: "1rem",
    height: "1rem"
})

export interface CheckboxProps {
    label: React.ReactNode;
    checkboxProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox = ({ label, checkboxProps }: CheckboxProps) => {
    return (
        <Container>
            <StyledCheckbox type="checkbox" {...checkboxProps} />
            {label}
        </Container>
    )
}

export default Checkbox;