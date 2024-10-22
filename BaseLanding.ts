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



import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseLandingPage {
    public abstract get btnLogin(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnOpenBankAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnOpenBankAccountLiv(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnCreateNewAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnResumeApplication(): ChainablePromiseElement<WebdriverIO.Element>;

    private async isElementDisplayedAfterWait(element: ChainablePromiseElement<WebdriverIO.Element>, timeout: number = 5000): Promise<boolean> {
        try {
            await element.waitForDisplayed({ timeout });
            return await element.isDisplayed();
        } catch (error) {
            await logger.info(`Element not displayed within ${timeout}ms: ${error}`);
            return false;
        }
    }

    private async clickElementIfDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>, logMessage: string) {
        try {
            if (await element.isDisplayed()) {
                await element.click();
                await logger.info(logMessage);
            }
        } catch (error) {
            await logger.info(`Failed to click on element: ${logMessage} - Error: ${error}`);
        }
    }

    public async verifyAndClickOnOpenNewBankAccount() {
        const currentPackage = await browser.getCurrentPackage();
        await logger.info('Application Launched Successfully.');

        try {
            await expect(this.btnLogin).toBeDisplayed();
            
            const isOpenBankAccountDisplayed = await this.isElementDisplayedAfterWait(this.btnOpenBankAccount, 15000);
            if (isOpenBankAccountDisplayed) {
                const buttonToClick = currentPackage === process.env.APP_PACKAGE_LIV 
                    ? this.btnOpenBankAccountLiv 
                    : this.btnOpenBankAccount;

                await this.clickElementIfDisplayed(buttonToClick, 
                    `Clicked Successfully on ${currentPackage === process.env.APP_PACKAGE_LIV ? 'Apply for an Account' : 'Open Bank Account'}`);
            } else {
                await logger.info('Open Bank Account button is not displayed. Proceeding with other flow...');
                await this.handleAlternativeFlow(); // Implement your alternative logic here
            }
        } catch (error) {
            await logger.info('Unable to click on Open Bank Account: ' + error);
        }
    }

    public async startNewJourney() {
        await logger.info('Resume journey popup displayed.');
        
        // Consider replacing browser.pause with a proper wait method if needed
        await browser.pause(6000);
        
        const isCreateNewAccountDisplayed = await this.isElementDisplayedAfterWait(this.btnCreateNewAccount);
        if (isCreateNewAccountDisplayed) {
            await this.clickElementIfDisplayed(this.btnCreateNewAccount, 'Clicked Successfully on Create New Account button.');
        }
    }

    public async startResumeJourney() {
        await logger.info('Resume journey popup displayed.');

        const isResumeApplicationDisplayed = await this.isElementDisplayedAfterWait(this.btnResumeApplication);
        if (isResumeApplicationDisplayed) {
            await this.clickElementIfDisplayed(this.btnResumeApplication, 'Clicked Successfully on Resume Application button.');
        }
    }

    private async handleAlternativeFlow() {
        // Implement the logic for the alternative flow here
        await logger.info('Handling alternative flow...');
    }
}

export default BaseLandingPage;
