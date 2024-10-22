import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseResidentialAddress {
    public abstract get textResidentialAddress(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputEmirates(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textDubai(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputArea(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputBuildingVilla(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputPoBox(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;

    public async fillResidentialAddress(Area: string, BUILDING: string, POBOX: string) {

        await logger.info('Navigated to Residential Address Page.');
        try {

            await expect(this.textResidentialAddress).toBeDisplayed();
            await browser.pause(2000);
            await this.textInputEmirates.click();
            await browser.pause(2000);
            await this.textDubai.click();
            await (this.textInputArea).setValue(Area);
            await (this.textInputBuildingVilla).setValue(BUILDING);
            await (this.textInputPoBox).setValue(POBOX);
            if (await this.btnDone.isDisplayed()) {
                await this.btnDone.click();
            }
            await this.btnContinue.click();
            await logger.info('Successfully submitted Residential details');
        }
        catch (error) {
            await logger.info('Failed to submitted Residential details' + error);
        }
    }
};

export default BaseResidentialAddress;