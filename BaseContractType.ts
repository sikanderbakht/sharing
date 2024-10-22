import { logger } from '../../../utils/logger.js';
import { ChainablePromiseElement } from 'webdriverio';

abstract class BaseContractType {
    public abstract get textContractType(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textSalaried(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textSelfEmployed(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textHousewife(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textStudent(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get textUnemployed(): ChainablePromiseElement<WebdriverIO.Element>;
    public abstract get clickDoneBtn(): ChainablePromiseElement<WebdriverIO.Element>;
};

export default BaseContractType;