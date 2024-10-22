import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';
import { UiSelectorBuilderiOS } from '../../../utils/UISelectorBuilderIOS.js';
import { UiSelectorBuilder } from '../../../utils/UISelectorBuilderAndroid.js';
import { UiComponents } from '../../../utils/UIComponents.js';

abstract class BaseOpenAccount {
    public abstract get textOpenAnAccount(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnContinue(): ChainablePromiseElement<WebdriverIO.Element>;

    public get scrollViewUIBuilder() {
        return UiSelectorBuilder.toScrollSelector();
    }

    public async accountBenefits() {
        await logger.info('Navigated to Account opening/Benifits Page.');
        try {
            await expect(this.textOpenAnAccount).toBeDisplayed();
            if (driver.isIOS) {
                await UiSelectorBuilderiOS.handleTouchScrollActions(190, 693, 196, 246, 500);
                await browser.pause(100000);
                await this.btnContinue.click();
            } else {
                await this.findElementAndNavigate(await this.btnContinue);
            }
            await logger.info('Successfully submitted work information');
        }
        catch (error) {
            await logger.info('Failed to redirect on Account opening/Benifits Page' + error);
        }
    }

    public async findElementAndNavigate(elementToFind: WebdriverIO.Element) {
        const uiScrollBuilder = await this.scrollViewUIBuilder;
        await new UiComponents().scrollDown(500, elementToFind, async (element) => {
            await elementToFind.click();
        }, async (error) => {
            console.log(error);
        }, uiScrollBuilder || undefined);
    }
};

export default BaseOpenAccount;


