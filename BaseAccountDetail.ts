import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseAccountDetail {
    public abstract get textThankyou(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textThankyouEI(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textCongratulations(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnGotoDashboard(): ChainablePromiseElement<WebdriverIO.Element>;

    public async accountDetails() {
        await logger.info('Navigated to Account Details.');
        try {
            await expect(this.textThankyou).toBeDisplayed();
            browser.pause(4000);
            await this.btnGotoDashboard.click();
            await logger.info('Successfully redirect to Dashboard');

        }
        catch (error) {
            await logger.info('Failed to redirect on Dashboard' + error);
        }
    }
};

export default BaseAccountDetail;





