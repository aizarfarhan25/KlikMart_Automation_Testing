import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../../Fixtures/basePage';

export class SignUpPage extends BasePage {
    readonly profileButton: Locator;
    readonly signUpButton: Locator;
    readonly signUpPageTitle: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly submitSignUpButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.profileButton = page.locator("(//div[@class='relative']//button)[1]");
        this.signUpButton = page.locator("(//div[contains(@class,'absolute right-0')]//a)[2]");
        this.signUpPageTitle = page.locator("h2");
        
        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.submitSignUpButton = page.locator("(//button[@type='submit'])[2]");
    }

    async goto() {
        console.log('Open KlikMart Website and go to SignUp Page');
        await this.page.goto('https://group-project-dlhpe1m6f-rafli-triatmas-projects.vercel.app/');
    }

    async SignUp(firstName: string, lastName: string, email: string, password: string) {
        await this.profileButton.click();
        await this.signUpButton.click();
        
        // Verify that we are on the Sign Up page before filling the form
        await this.signUpPageTitle.waitFor({ state: 'visible' });
        await expect(this.signUpPageTitle).toBeVisible();
        console.log('Sign Up page verified');
        
        // Tambahkan delay sebelum mengisi form
        await this.page.waitForTimeout(1000);
        
        // Isi form dengan delay di setiap langkah
        console.log('Mengisi field firstName');
        await this.firstName.fill(firstName);
        await this.page.waitForTimeout(1000);
        
        console.log('Mengisi field lastName');
        await this.lastName.fill(lastName);
        await this.page.waitForTimeout(1000);
        
        console.log('Mengisi field email');
        await this.email.fill(email);
        await this.page.waitForTimeout(1000);
        
        console.log('Mengisi field password');
        await this.password.fill(password);
        await this.page.waitForTimeout(1000);
        
        console.log('Klik tombol Sign Up');
        await this.submitSignUpButton.click();
        await this.page.waitForTimeout(2000); // Delay lebih lama setelah submit
    }
}

// export class SignUpPage extends BasePage {
//     readonly firstName: Locator;
//     readonly lastName: Locator;
//     readonly email: Locator;
//     readonly password: Locator;
//     readonly signUpButton: Locator;

//     constructor(page: Page) {
//         super(page);
//         this.firstName = page.locator("#firstName");
//         this.lastName = page.locator("#lastName']");
//         this.email = page.locator("#email");
//         this.password = page.locator("#password");
//         this.signUpButton = page.locator("(//button[@type='submit'])[2]");
//     }
// }