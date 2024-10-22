import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BasePersonalInformationPage {
    public abstract get textPersonalInformation(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputCountryOfBirth(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textCOBValue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputPlaceOfBirth(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputCountryOfResidence(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textNCORValue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputMaritalStatus(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputSearchCountry(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;

    public async verifyPersonalInformationPage() {
        await logger.info('Navigated to Account Opening Fragment Page.');

        try {
            expect(this.textPersonalInformation).toBeDisplayed();
        }
        catch (error) {
            await logger.info('Failed to Navigated at Account Opening Fragment Page.' + error);
        }
    }

    public async countryOfBirth(COB: string) {

        await this.textInputCountryOfBirth.click();
        await this.textInputSearchCountry.setValue(COB);
        await this.textCOBValue.click();
    }
    public async placeofBirth(POB: string) {

        await this.textInputPlaceOfBirth.setValue(POB);
    }
    public async normalCountryOfResident(NormalCountryOfResident: string) {
        await this.textInputCountryOfResidence.click();
        await this.textInputSearchCountry.setValue(NormalCountryOfResident);
        await this.textNCORValue.click();
    }

    public async continieBtn() {
        await this.btnContinue.click();
    }
}

export default BasePersonalInformationPage;
