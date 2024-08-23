import { Box, styled } from "@mui/material";
import Header from "./Header"
import { styles } from "../constants/style.constants";
import Footer from "./Footer";

const PageContainerOuter = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: styles.blue
});

export interface PageContainerProps {
    children?: React.ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <PageContainerOuter>
            <Header />
            { children }
            <Footer />
        </PageContainerOuter>
    )
};

export default PageContainer;