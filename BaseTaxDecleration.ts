import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';
import daoData from '../../../resources/dao-test-data/dao.json' with { type: 'json' };

abstract class BaseTaxDeclaration {
    public abstract get textTaxDeclaration(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get toggleIsTaxPayer(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textAddTaxDetails(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputSearch(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textIndia(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textAddYourTin(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputTin(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textDontHaveTin(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textNoTinRequired(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnSave(): ChainablePromiseElement<WebdriverIO.Element>;
    
    public async submitTaxDetails() {

        await logger.info('Navigated to Tax Declaration Page.');
        try {
                await expect(this.textTaxDeclaration).toBeDisplayed();
                await this.btnContinue.click();
                await logger.info('Successfully submitted Tax details');
            
        }
        catch (error) {
            await logger.info('Failed to submit Tax details' + error);
        }
    }

    public async taxpayerDetails(){
        await logger.info('Navigated to Tax Declaration Page.');
        try {
                await expect(this.textTaxDeclaration).toBeDisplayed();
                const taxxpayer =  daoData.taxPayer
                const addTINNo =  daoData.TIN
                if(taxxpayer=="Yes"){

                    await this.toggleIsTaxPayer.click();
                    await this.textAddTaxDetails.click();
                    await this.textInputSearch.setValue(daoData.taxPayerCountry);
                    await this.textIndia.click();
                    await expect(this.textAddYourTin).toBeDisplayed();
                    if(addTINNo=="Yes"){
                        await this.textDontHaveTin.click();
                        await this.textNoTinRequired.click();
                        await this.btnContinue.click();
                        await this.btnContinue.click();
                    }
                    await this.textInputTin.setValue(daoData.TINNo);
                    if (driver.isIOS) {
                        await this.btnDone.click();
                    } else {
                        if (await driver.isKeyboardShown()) {
                            await driver.hideKeyboard();
                        }
                    }
                    
                    await this.btnSave.click();

                }
            
        }
        catch (error) {
            await logger.info('Failed to select Tax details' + error);
        }

    }
};

export default BaseTaxDeclaration;