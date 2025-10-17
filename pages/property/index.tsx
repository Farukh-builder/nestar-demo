import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { WifiTethering } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";


const PropertyLIst: NextPage = () => {
    return (
    <div style={{ margin: "20px 0 "}}>
        <Stack className="container">PROPERTY LIST</Stack>
    </div>
    )
}

export default withLayoutBasic(PropertyLIst);