import { test, expect } from '../Fixtures/baseTest';
import { SignUpPage } from '../Pages/SignUp/component_signup';

test.describe("SignUp Test", () => {
    test.beforeEach(async () => {
        console.log("Test Sign Up");
    });

    test.afterEach(async () => {
        console.log("Sign Up Success");
    });

    test("Valid Sign Up", async ({ page, testData }) => {
        const signUpPage = new SignUpPage(page);
        await signUpPage.goto();
        
        await signUpPage.SignUp(
            testData.SignUpData.firstName,
            testData.SignUpData.lastName,
            testData.SignUpData.email,
            testData.SignUpData.password
        );
    })
})