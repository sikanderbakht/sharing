import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseManualVerification {
    public abstract get textScanYourEmiratesID(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textScanYourPassport(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get tabToUploadEidaFront(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textUploadViaPhotoLibrary(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textUploadViaGallery(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get tabToUploadEidaBack(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get tabToUploadPassport(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get eidaBackImage(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get eidaFrontImage(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get passportImage(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnNext(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textEIDASuccessUpload(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textSelfieUpload(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textPassportSuccessUpload(): ChainablePromiseElement<WebdriverIO.Element>;
    
    public async eidaFrontBackManualverification() {

        await logger.info('Navigated to Manual Verification Page.');
        try {
            expect(this.textScanYourEmiratesID).toBeDisplayed();
            if (await this.textScanYourEmiratesID.isDisplayed()) {
                await expect(this.tabToUploadEidaFront).toBeDisplayed();
                await this.tabToUploadEidaFront.click();
                await this.textUploadViaPhotoLibrary.click();
                await this.eidaFrontImage.click();
                await this.btnDone.click();

                await this.tabToUploadEidaBack.click();
                await this.textUploadViaPhotoLibrary.click();
                await this.eidaBackImage.click();
                await this.btnDone.click();
                await this.btnNext.click()
                await logger.info('Successfully clicked on To Upload Front Side');
            }
        }
        catch (error) {
            await logger.info('Failed to Navigated at Employmenet Details Page.' + error);
        }
    }

    public async ContinueBtn() {
        await this.btnContinue.waitForDisplayed({timeout: 20000});
        if (await this.btnContinue.isDisplayed()) {
            await this.btnContinue.click();
        }
    }

    public async passportFrontManualVerification(){

        await logger.info('Navigated to Manual Verification Page. passportFrontManualVerification');
        try {
            await this.textUploadViaGallery.waitForDisplayed({timeout: 5000});
            await this.textUploadViaGallery.click();
            await expect(this.textScanYourPassport).toBeDisplayed();
            if (await this.textScanYourPassport.isDisplayed()) {
                await expect(this.tabToUploadPassport).toBeDisplayed();
                await this.tabToUploadPassport.click();
                await this.textUploadViaPhotoLibrary.click();
                await this.passportImage.click();
                await this.btnDone.click();
                await this.btnNext.click();
                await logger.info('Successfully clicked on To Upload Front Side');
            }
            await expect(this.textSelfieUpload).toBeDisplayed();
            await this.btnContinue.click();
            await browser.pause(5000);
            await this.btnContinue.click();
            await browser.pause(5000);
            await this.btnContinue.click();
        }
        catch (error) {
            await logger.info('Failed to Navigated at Employmenet Details Page.' + error);
        }
    }
};

export default BaseManualVerification;