import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseIdentityVerification {
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textUploadViaGallery(): ChainablePromiseElement<WebdriverIO.Element>;

    public async selectUploadViaPhotoLibrary() {
        await this.btnContinue.waitForDisplayed({timeout: 15000});
        if (await this.btnContinue.isDisplayed()) {
            await this.btnContinue.click();
        }

        await this.textUploadViaGallery.waitForDisplayed({timeout: 1000});
        if (await this.textUploadViaGallery.isDisplayed()) {
            await this.textUploadViaGallery.click();
        }
        
    }
};

export default BaseIdentityVerification;