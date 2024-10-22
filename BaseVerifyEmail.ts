import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseVerifyEmail {
    public abstract get textVerifyEmail(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputEmailOtp(): ChainablePromiseElement<WebdriverIO.Element>;

    public async enterEmailOTP(emailotp: string) {
        await logger.info('Navigated to Email OTP Page.');
        try {
            await this.textVerifyEmail.waitForDisplayed({ timeout: 10000 });
            expect(this.textVerifyEmail).toBeDisplayed();
            if (await this.textVerifyEmail.isDisplayed()) {
                    await (this.textInputEmailOtp).setValue(emailotp);
                    await logger.info('Entered Email OTP Successfully');
                }
            }
        catch (error) {
            await logger.info('Failed to Navigated at Email OTP Page.' + error);
        }
    }
};

export default BaseVerifyEmail;

