import { constructPage, readPage } from "./templatingEngine.js";

const auth = readPage("public/pages/auth/auth.html");

export const authPage = constructPage(auth, {
    cssLinks: `<link rel="stylesheet" href="/assets/css/auth.css"/>`,
    tabTitle: "Floorplanner | Authentication"
});
