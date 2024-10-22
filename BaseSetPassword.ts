import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';
import { UiSelectorBuilderiOS } from '../../../utils/UISelectorBuilderIOS.js';
import { UiSelectorBuilder } from '../../../utils/UISelectorBuilderAndroid.js';
import { UiComponents } from '../../../utils/UIComponents.js';

abstract class BaseSetPassword {
    public abstract get textSetPassword(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputPassword(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputConfirmPassword(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;

    public async setPassword(password: string, confirmPassword: string) {

        await logger.info('Navigated to Password Page.');
        try {
            await expect(this.textSetPassword).toBeDisplayed();
            await (this.textInputPassword).setValue(password);
            await (this.textInputConfirmPassword).setValue(confirmPassword);
            if (driver.isIOS) {
                await this.btnDone.click();
            } else {
                if (await driver.isKeyboardShown()) {
                    await driver.hideKeyboard();
                }
            }
            await this.btnContinue.click();
            await logger.info('Successfully set password');

        }
        catch (error) {
            await logger.info('Failed to redirect on set password' + error);
        }
    }
};

export default BaseSetPassword;