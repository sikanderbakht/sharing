import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseWorkInfo {
    public abstract get textWorkInformation(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputJobTitle(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputCompany(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;
    
    public async fillworkInformationDetails(jobTitle: string, Company: string) {
        await logger.info('Navigated to work informationx Page.');
        try {
            await expect(this.textWorkInformation).toBeDisplayed();
            await (this.textInputJobTitle).setValue(jobTitle);
            await (this.textInputCompany).setValue(Company);
            if (driver.isIOS) {
                await this.btnDone.click();
            } else {
                if (await driver.isKeyboardShown()) {
                    driver.hideKeyboard();
                }
            }
            await this.btnContinue.click();
            await logger.info('Successfully submitted work information');
        }
        catch (error) {
            await logger.info('Failed to submit work information' + error);
        }
    }
};

export default BaseWorkInfo;





