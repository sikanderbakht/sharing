import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseLandingPage {
    public abstract get btnLogin(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnOpenBankAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnOpenBankAccountLiv(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnCreateNewAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnResumeApplication(): ChainablePromiseElement<WebdriverIO.Element>;

    public async verifyAndClickOnOpenNewBankAccount() {
        const currentPackage = await browser.getCurrentPackage();
        await logger.info('Application Launched Successfully. ');
        try {
            await expect(this.btnLogin).toBeDisplayed();
            await this.btnOpenBankAccount.waitForDisplayed({ timeout: 15000 })
            if (currentPackage === process.env.APP_PACKAGE_LIV) {
                if (await this.btnOpenBankAccountLiv.isDisplayed()) {
                    await this.btnOpenBankAccountLiv.click();
                    await logger.info('Clicked Successfully on Apply for an Account');
                }
            } else {
                if (await this.btnOpenBankAccount.isDisplayed()) {
                    await this.btnOpenBankAccount.click();
                    await logger.info('Clicked Successfully on Open Bank Account');
                }
            }
        } catch (error) {
            await logger.info('Unable to click on Open Bank Account------>>>>>' + error);
        }
    }

    public async startNewJourney(){
        await logger.info('Resume journey popup displayed.');
        try {
            await browser.pause(6000);
            if (await this.btnCreateNewAccount.isDisplayed()) {
                await this.btnCreateNewAccount.click();
            }
        }
        catch (error) {
            await logger.info('Failed to click on create new popup btn.' + error);
        }
    }

    public async startResumeJourney(){
        await logger.info('Resume journey popup displayed.');
        try {
            if (expect(this.btnResumeApplication.isDisplayed())) {
                await this.btnResumeApplication.click();
            }
        }
        catch (error) {
            await logger.info('Failed to click on Resume popup btn.' + error);
        }
    }
}

export default BaseLandingPage;
