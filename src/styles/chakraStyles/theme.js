import { headingStyle } from "./headingStyles";

const breakpoints = {
    sm: "48em",
    md: "62em",
    lg: "80em",
    xl: "96em"
};
const overrideTheme = {
    components: {
...headingStyle
    },
    colors: {
        baseText: "#FFFFFF",
        light_bg: {
         blue:"#122A75"
}
    },
    breakpoints,
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
    },
    layerStyles: {
    },
    textStyles: {
        p: {
            color:"white"
        },

        a: {
            color:"white"
        }
    },
    icons: {
    },
};
export default overrideTheme;
