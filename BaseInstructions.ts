import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseInstructions {
    public abstract get btnGetStarted(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textOpenNewAccountENBD(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textOpenNewAccountEI(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textOpenNewAccountLIV(): ChainablePromiseElement<WebdriverIO.Element>;

    public async verifyDaoInstructionsAndProceedToContactDetails() {
        const currentEntity = process.env.ENTITY;
        await logger.info('Navigated to DAO Instruction Page.');
        try {
            if (currentEntity === 'ENBD') {
                await expect(this.textOpenNewAccountENBD).toBeDisplayed();
            } else if (currentEntity === 'EI') {
                await expect(this.textOpenNewAccountEI).toBeDisplayed();
            } else {
                await expect(this.textOpenNewAccountLIV).toBeDisplayed();
            }
            if (!await this.btnGetStarted.isDisplayed()) {
                // TODO:: Ankit and Sikander if scroll to end is working fine on IOS and Android
                await browser.execute('mobile: scroll', { direction: 'down' });
                await browser.pause(5000);
            }
            await this.btnGetStarted.click();
            await logger.info('Clicked Successfully on Get started Button');
        }
        catch (error) {
            await logger.info('Failed to proceed from DAO Instruction Page.' + error);
        }
    }
};

export default BaseInstructions;