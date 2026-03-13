import { test } from '@playwright/test';
import { getConfig } from '@utils/config-3';
import { MainPage } from '@pages/02-new-way/main.page';

test.describe("Simple test cases driven", async () => {
    test("Test 1: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig('test-data', 'case_1')
        const username = testDataJson.username;
        const email = testDataJson.email;
        const gender = testDataJson.gender;
        const hobbies = testDataJson.hobbies.split(",").map((item: string) => item.trim());

        const mainPage = new MainPage(page);

        const registerPage = mainPage.clickRegisterLink();
        (await registerPage).verifyHeading();

        (await registerPage).formValue.fillForm(username, email, gender, hobbies);

        (await registerPage).formValue.verifyDataFormAfterSubmit(hobbies);

        (await registerPage).tableValue.verifyDataTable(username, email, gender, hobbies);
    });

    test("Test 2: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig('test-data', 'case_2')
        const username = testDataJson.username;
        const email = testDataJson.email;
        const gender = testDataJson.gender;
        const hobbies = testDataJson.hobbies.split(",").map((item: string) => item.trim());

        const mainPage = new MainPage(page);

        const registerPage = mainPage.clickRegisterLink();
        (await registerPage).verifyHeading();

        (await registerPage).formValue.fillForm(username, email, gender, hobbies);

        (await registerPage).formValue.verifyDataFormAfterSubmit(hobbies);

        (await registerPage).tableValue.verifyDataTable(username, email, gender, hobbies);

    });

    test("Test 3: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig('test-data', 'case_3')
        const username = testDataJson.username;
        const email = testDataJson.email;
        const gender = testDataJson.gender;
        const hobbies = testDataJson.hobbies.split(",").map((item: string) => item.trim());

        const mainPage = new MainPage(page);

        const registerPage = mainPage.clickRegisterLink();
        (await registerPage).verifyHeading();

        (await registerPage).formValue.fillForm(username, email, gender, hobbies);

        (await registerPage).formValue.verifyDataFormAfterSubmit(hobbies);

        (await registerPage).tableValue.verifyDataTable(username, email, gender, hobbies);

    });
});