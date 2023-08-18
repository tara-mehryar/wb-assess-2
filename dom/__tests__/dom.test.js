import '@testing-library/jest-dom';
import { getDocument, queries } from 'pptr-testing-library';

const { getByTestId, getByPlaceholderText } = queries;
const pageToTest = new URL('../index.html', import.meta.url).href;
let alertMessage, doc;

describe('Test dom/index.html', () => {
  beforeEach(async () => {
    await jestPuppeteer.resetPage();

    page.on('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.dismiss();
    });

    await page.goto(pageToTest);
    doc = await getDocument(page);
  });

  test("the #close-form button should change its label from 'X' to '+' on click", async () => {
    const button = await getByTestId(doc, 'close-form');
    expect(await button?.evaluate((el) => el.textContent)).toBe('X');

    await button?.click();
    expect(await button?.evaluate((el) => el.textContent)).toBe('+');
  });

  test('the #close-form button should toggle the .hide class on the form on click', async () => {
    const form = await getByTestId(doc, 'form');
    const button = await getByTestId(doc, 'close-form');

    await button?.click();
    expect(await form?.evaluate((el) => el.classList.contains('hide'))).toBe(true);
    await button?.click();
    expect(await form?.evaluate((el) => el.classList.contains('hide'))).toBe(false);
  });

  test("should alert 'You must enter a name and an email address to subscribe!' if you submit the form without entering a name or email", async () => {
    const form = await getByTestId(doc, 'form');
    const submitButton = await getByTestId(form, 'sign-up');

    await submitButton?.click();

    expect(alertMessage).toBe('You must enter a name and an email address to subscribe!');
  });

  test("should alert 'Please enter a name to subscribe.' if you submit the form without entering a name", async () => {
    const form = await getByTestId(doc, 'form');
    const submitButton = await getByTestId(form, 'sign-up');
    const emailInput = await getByPlaceholderText(form, 'email');

    await emailInput?.type('email@email.com');
    await submitButton?.click();

    expect(alertMessage).toBe('Please enter a name to subscribe.');
  });

  test("should alert 'Please enter an email address to subscribe.' if you submit the form without entering an email address form", async () => {
    const form = await getByTestId(doc, 'form');
    const submitButton = await getByTestId(form, 'sign-up');
    const nameInput = await getByPlaceholderText(form, 'name');

    await nameInput?.type('John Doe');
    await submitButton?.click();

    expect(alertMessage).toBe('Please enter an email address to subscribe.');
  });

  test("the name input should have a red border if you don't submit a name", async () => {
    const form = await getByTestId(doc, 'form');
    const submitButton = await getByTestId(form, 'sign-up');

    await submitButton?.click();

    const nameInput = await getByPlaceholderText(form, 'name');
    expect(await nameInput?.evaluate((el) => el.style.border)).toBe('2px solid red');
  });

  test("the email input should have a red border if you don't submit an email", async () => {
    const form = await getByTestId(doc, 'form');
    const submitButton = await getByTestId(form, 'sign-up');

    await submitButton?.click();

    const emailInput = await getByPlaceholderText(form, 'email');
    expect(await emailInput?.evaluate((el) => el.style.border)).toBe('2px solid red');
  });

  test("should display 'Thank you for subscribing!' if you submit the form with a name and email", async () => {
    const form = await getByTestId(doc, 'form');
    const emailInput = await getByPlaceholderText(form, 'email');
    const nameInput = await getByPlaceholderText(form, 'name');
    const submitButton = await getByTestId(form, 'sign-up');

    await nameInput?.type('John Doe');
    await emailInput?.type('email@email.com');
    await submitButton?.click();

    const formContainer = await getByTestId(doc, 'form-container');
    expect(await formContainer?.evaluate((el) => el.textContent)).toBe(
      'Thank you for subscribing!',
    );
  });
});
