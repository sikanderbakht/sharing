import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseAccountTypes {
    public abstract get textAccountOpening(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textCurrentAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnAccountTypesNext(): ChainablePromiseElement<WebdriverIO.Element>;

    public async verifyAccountOpeningAndClickNext() {
        await logger.info('Navigated to Account Opening Fragment Page.');
        try {
            await expect(this.textCurrentAccount).toBeDisplayed();
            if (await this.textCurrentAccount.isDisplayed()) {
                // TODO:: Ankit Sikander Check this scroll
                if (!await this.btnAccountTypesNext.isDisplayed()) {
                    await browser.execute('mobile: scroll', { direction: 'down' });
                }
                expect(this.btnAccountTypesNext).toBeDisplayed();
                await this.btnAccountTypesNext.click();
                await logger.info('Clicked Successfully on Next Button');
            }
        }
        catch (error) {
            await logger.info('Failed to Navigated at Account Opening Fragment Page.' + error);
        }
    }
};

export default BaseAccountTypes;