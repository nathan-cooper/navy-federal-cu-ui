import { Box, styled } from "@mui/material";

const Container = styled(Box)({
    position: "relative",
    width: "100%"
})

const Input = styled("input")({
    width: "100%",
    height: "3rem",
    borderRadius: "0.5rem",
    border: "1px solid gray",
    padding: "0.5rem 0 0.5rem 2.5rem",
    fontSize: "1.25rem"
});

export interface IconInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: string;
}

const IconInput = ({ icon, ...inputProps }: IconInputProps) => {
    return (
        <Container>
            {icon && (
                <span style={{ position: "absolute", top: "0.75rem", left: "0.5rem" }}>
                    <img src={icon} />
                </span>
            )}
            <Input {...inputProps} />
        </Container>
    )
}

export default IconInput;