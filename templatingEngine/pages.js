import { constructPage, readPage } from "./templatingEngine.js";

const login = readPage("public/pages/auth/login.html");

export const loginPage = constructPage(login);

const signUp = readPage("public/pages/auth/signUp.html");

export const signUpPage = constructPage(signUp);
