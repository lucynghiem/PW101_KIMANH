import { expect, Locator } from "@playwright/test";

export class TableResultComponent {
    readonly lastInfoRow: Locator;
    readonly username: Locator;
    readonly email: Locator;
    readonly genderAndHobbies: Locator;
    readonly pageName: string;

    constructor(readonly root: Locator, pageName: string) {
        this.lastInfoRow = root.locator("tr").last();
        this.username = this.lastInfoRow.locator("td").nth(1);
        this.email = this.lastInfoRow.locator("td").nth(2);
        this.genderAndHobbies = this.lastInfoRow.locator("td").nth(3);
        this.pageName = pageName
    }


    async verifyDataTable(username: string, email: string, gender: string, hobbies: string[]) {
        await expect(this.username).toContainText(username);
        await expect(this.email).toContainText(email);
        await expect(this.genderAndHobbies).toContainText(gender);

        for (const item of hobbies) {
            await expect(this.genderAndHobbies).toContainText(item);
        }

    }




}