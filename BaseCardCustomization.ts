import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';
import { UiSelectorBuilderiOS } from '../../../utils/UISelectorBuilderIOS.js';
import { UiSelectorBuilder } from '../../../utils/UISelectorBuilderAndroid.js';
import { UiComponents } from '../../../utils/UIComponents.js';

abstract class BaseCardCustomization {
    public abstract get textCustomizeCard(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputNameOnCard(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get imageDebitCard(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnDone(): ChainablePromiseElement<WebdriverIO.Element>;

    public get btnSlideToConfirm(): ChainablePromiseElement<WebdriverIO.Element> {
        return new UiSelectorBuilder().withClassName("android.widget.RelativeLayout").withResourceId("com.emiratesnbd.android.uat:id/swipeToAccept").toSelector();
    }

    public get btnSlideToConfirmEI(): ChainablePromiseElement<WebdriverIO.Element> {
        return new UiSelectorBuilder().withClassName("android.widget.RelativeLayout").withResourceId("com.emiratesislamic.android.uat:id/swipeToAccept").toSelector();
    }

    public get btnSlideToConfirmLiv(): ChainablePromiseElement<WebdriverIO.Element> {
        return new UiSelectorBuilder().withClassName("android.widget.RelativeLayout").withResourceId("me.livx.android.uat:id/swipeToAccept").toSelector();
    }

    public async getSliderToConfirmWidth(element: WebdriverIO.Element): Promise<number> {
        return (await element.getSize()).width;
    }

    public async slideToConfirm(element: WebdriverIO.Element) {
        let sliderWidth = await this.getSliderToConfirmWidth(element);
        await new UiComponents().swipeTheButton(element, sliderWidth);
    }

    public async fillCardDetails(name: string) {

        await logger.info('Navigated to Card Customization Page.');
        try {
            await expect(this.imageDebitCard).toBeDisplayed();
            await (this.textInputNameOnCard).setValue(name);
            if (driver.isIOS) {
                await this.btnDone.click();
                await UiSelectorBuilderiOS.handleTouchScrollActions(190, 693, 196, 246, 500);
                await browser.pause(100);
                await UiSelectorBuilderiOS.handleTouchScrollActions(62, 779, 336, 781, 500);
            } else {
                if (await driver.isKeyboardShown()) {
                    await driver.hideKeyboard();
                }
                await this.slideToConfirm(await this.btnSlideToConfirm);
            }
            await logger.info('Successfully submitted work information');
        }
        catch (error) {
            await logger.info('Failed to redirect on Card Customization Page' + error);
        }
    }
};

export default BaseCardCustomization;


