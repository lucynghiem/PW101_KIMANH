import { Locator, Page, expect } from '@playwright/test'
import { RegisterPage } from './registerPage.page';

export class MainPage {
    // readonly headingLoc: Locator;
    readonly regisTerLink: Locator;

    constructor(readonly page: Page) {

        this.regisTerLink = page.locator('a[href="01-xpath-register-page.html"]');

    }
    async clickRegisterLink() {
        await this.page.goto("https://material.playwrightvn.com/");


        await expect(this.regisTerLink).toBeVisible();
        await this.regisTerLink.click();

        return new RegisterPage(this.page);
    }


}