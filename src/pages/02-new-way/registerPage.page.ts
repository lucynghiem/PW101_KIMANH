import { FormComponent } from '@pages/03-component/components/form.Component';
import { TableResultComponent } from '@pages/03-component/components/tableResult.component';
import { expect, Locator, Page } from '@playwright/test'


export class RegisterPage {
    readonly headingLoc: Locator;
    readonly form: FormComponent;
    readonly table: TableResultComponent;

    constructor(readonly page: Page) {
        this.headingLoc = page.getByRole('heading', { name: 'User Registration' });
        this.form = new FormComponent(page.locator("#registrationForm"), 'register');
        this.table = new TableResultComponent(page.locator("#userTable tbody"), 'register');
    }

    async verifyHeading() {
        await expect(this.headingLoc).toBeVisible();
        return expect(this.headingLoc).toHaveText("User Registration");
    }

    async fillRegistrationForm(username: string, email: string, gender: string, hobbies: string[]) {
        await this.form.fillForm(username, email, gender, hobbies);
    }

    get formValue() {
        return this.form;
    }

    get tableValue() {
        return this.table;
    }
}