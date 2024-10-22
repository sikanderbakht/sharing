import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseVerifyMobile {
    public abstract get textVerifyMobile(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputMobileOtp(): ChainablePromiseElement<WebdriverIO.Element>;

    public async enterMobileOTP(mobileotp: string) {
        await logger.info('Navigated to Mobile OTP Page.');

        try {
            await this.textVerifyMobile.waitForDisplayed({ timeout: 10000 });
            expect(this.textVerifyMobile).toBeDisplayed();
            if (await this.textVerifyMobile.isDisplayed()) {
                await (this.textInputMobileOtp).setValue(mobileotp);
                await logger.info('Entered Mobile OTP Successfully');
            }
        }
        catch (error) {
            await logger.info('Failed to Navigated at Mobile OTP Page.' + error);
        }
    }
};

export default BaseVerifyMobile;

