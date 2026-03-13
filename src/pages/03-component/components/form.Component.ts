import { expect, Locator } from "@playwright/test";

export class FormComponent {
    readonly userName: Locator;
    readonly email: Locator;
    readonly gender: Locator;
    readonly hobbies: Locator;
    readonly pageName: string;
    readonly registerButton: Locator;

    constructor(readonly root: Locator, pageName: string) {
        this.userName = root.getByLabel("Username:");
        this.email = root.getByLabel("Email:");
        this.gender = root.getByLabel("Gender:");
        this.hobbies = root.getByLabel("Hobbies:");
        this.registerButton = root.getByRole("button", { name: "Register" });
        this.pageName = pageName
    }


    async fillForm(username: string, email: string, gender: string, hobbies: string[]) {
        await this.userName.fill(username);
        await this.email.fill(email);
        await this.gender.fill(gender);
        for (const item of hobbies) {
            await this.hobbies.filter({ hasText: item }).check();
        }
        await this.registerButton.click();

    }


    async verifyDataFormAfterSubmit(hobbies: string[]) { 
        await expect(this.userName).toHaveValue('');
        await expect(this.email).toHaveValue('');
        await expect(this.gender).toHaveValue('');
        for (const item of hobbies) {
            await expect(this.hobbies.filter({ hasText: item })).not.toBeChecked();
        }
    }




}