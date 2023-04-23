import { sidebar } from "vuepress-theme-hope";
import { notes } from "./notes";

export default sidebar(
    {
        "/notes/": notes,
        "/articles/": "structure"
    },
);
