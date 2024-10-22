import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseContactDetails {
    public abstract get textBoxPhoneNumber(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textBoxEmail(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textBoxInviteCode(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textContactDetails(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;

    public async enterPhoneNoAndEmailID(phonenumber: string, email: string) {
        await logger.info('Navigated to Contact Details Page.');
        try {
            await expect(this.textBoxPhoneNumber).toBeDisplayed();
            if (await this.textBoxPhoneNumber.isDisplayed()) {
                await this.textBoxPhoneNumber.setValue(phonenumber);
                await this.textBoxEmail.setValue(email);
                await logger.info('Entered Phone Number and Email ID Successfully');
                if (await driver.isKeyboardShown()) {
                    await driver.hideKeyboard();
                }
                if (await this.btnContinue.isDisplayed()) {
                    await this.btnContinue.click();
                    await logger.info('Clicked Continue Button on contact details Page');
                }
            }
        }
        catch (error) {
            await logger.info('Failed to Navigated at Contact Details Page.' + error);
        }
    }

    public async enterEmailID(email: string) {
        await logger.info('Navigated to Contact Details Page.');
        try {
            await expect(this.textBoxEmail).toBeDisplayed();
            if (await this.textBoxEmail.isDisplayed()) {
                await this.textBoxEmail.setValue(email);
                await logger.info('Entered Phone Number and Email ID Successfully');
                if (await driver.isKeyboardShown()) {
                    await driver.hideKeyboard();
                }
                if (await this.btnContinue.isDisplayed()) {
                    await this.btnContinue.click();
                    await logger.info('Clicked Continue Button on contact details Page');
                }
            }
        }
        catch (error) {
            await logger.info('Failed to Navigated at Contact Details Page.' + error);
        }
    }
};

export default BaseContactDetails;

