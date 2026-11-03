import { constructPage, readPage } from "./templatingEngine.js";

const login = readPage("public/auth/login.html");

export const loginPage = constructPage(login);

const signUp = readPage("public/auth/signUp.html");

export const signUpPage = constructPage(signUp);
