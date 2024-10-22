import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseEmploymentDetails {
    public abstract get textEmploymentDetails(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputEmploymentStatus(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textInputMonthlySalary(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get btnNext(): ChainablePromiseElement<WebdriverIO.Element>;

    public async enterMonthlySalary(monthlysalary: string) {
        await logger.info('Enter Monthly Salary in Employmenet Details Page.');
        try {
            await expect(this.textInputMonthlySalary).toBeDisplayed();
            if (await this.textInputMonthlySalary.isDisplayed()) {
                await (this.textInputMonthlySalary).setValue(monthlysalary);
                await logger.info('Successfully entered Monthly Salary');
                if (await driver.isKeyboardShown()) {
                    await driver.hideKeyboard();
                }
                await this.btnNext.click();
            }
        }
        catch (error) {
            await logger.info('Failed to Enter Monthly Salary in Employmenet Details Page.' + error);
        }
    }
};

export default BaseEmploymentDetails;