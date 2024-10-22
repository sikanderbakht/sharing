import dotenv from 'dotenv';
dotenv.config();
import { Given, When } from '@wdio/cucumber-framework';
import { getPage } from '../../pageobjects/base/Baseutil.js';
import daoData from '../../resources/dao-test-data/dao.json' with { type: 'json' };
import IosLandingPage from '../../pageobjects/ios/dao/ios.landing.page.js';
import AndroidLandingPage from '../../pageobjects/android/dao/android.landing.page.js';
import IOSDaoInstructionsPage from '../../pageobjects/ios/dao/ios.daoinstructions.page.js';
import AndroidDaoInstructionsPage from '../../pageobjects/android/dao/android.daoinstructions.page.js';
import IOSDaoContactDetailsPage from '../../pageobjects/ios/dao/ios.daocontactdetails.page.js';
import AndroidDaoContactDetailsPage from '../../pageobjects/android/dao/android.daocontactdetails.page.js';
import IOSDaoVerifyMobilePage from '../../pageobjects/ios/dao/ios.daoverifymobile.page.js';
import AndroidDaoVerifyMobilePage from '../../pageobjects/android/dao/android.daoverifymobile.page.js';
import IOSDaoVerifyEmailPage from '../../pageobjects/ios/dao/ios.daoverifyemail.page.js';
import AndroidDaoVerifyEmailPage from '../../pageobjects/android/dao/android.daoverifyemail.page.js';
import IOSDaoAccountTypesPage from '../../pageobjects/ios/dao/ios.daoaccounttypes.page.js';
import AndroidDaoAccountTypesPage from '../../pageobjects/android/dao/android.daoaccounttypes.page.js';
import IOSDaoEmploymentDetailsPage from '../../pageobjects/ios/dao/ios.daoemploymentdetails.page.js';
import AndroidDaoEmploymentDetailsPage from '../../pageobjects/android/dao/android.daoemploymentdetails.page.js';
import IOSDaoTermsAndConditionsPage from '../../pageobjects/ios/dao/ios.daotermsandcondtions.page.js';
import AndroidDaoTermsAndConditionsPage from '../../pageobjects/android/dao/android.daotermsandconditions.page.js';
import IOSDaoPersonalInformationPage from '../../pageobjects/ios/dao/ios.daopersonalinformation.page.js';
import AndroidDaoPersonalInformationPage from '../../pageobjects/android/dao/android.daopersonalinformation.page.js';
import IOSDaoIdentityVerificationPage from '../../pageobjects/ios/dao/ios.daoidentityverification.page.js';
import AndroidDaoIdentityVerificationPage from '../../pageobjects/android/dao/android.daoidentityverification.page.js';
import IOSDaoManualVerificationPage from '../../pageobjects/ios/dao/ios.daomanualverification.page.js';
import AndroidDaoManualVerificationPage from '../../pageobjects/android/dao/android.daomanualverification.page.js';
import IOSDaoSignatureOptionPage from '../../pageobjects/ios/dao/ios.daosignatureoption.page.js';
import AndroidDaoSignatureOptionPage from '../../pageobjects/android/dao/android.daosignatureoption.page.js';
import IOSDaoResidentialAddressPage from '../../pageobjects/ios/dao/ios.daoresidentialaddress.page.js';
import AndroidDaoResidentialAddressPage from '../../pageobjects/android/dao/android.daoresidentialaddress.page.js';
import IOSDaoWorkInformationPage from '../../pageobjects/ios/dao/ios.daoworkinformation.page.js';
import AndroidDaoWorkInformationPage from '../../pageobjects/android/dao/android.daoworkinformation.page.js';
import IOSDaoTaxDeclarationPage from '../../pageobjects/ios/dao/ios.daotaxdeclaration.page.js';
import AndroidDaoTaxDeclarationPag from '../../pageobjects/android/dao/android.daotaxdeclaration.page.js';
import IOSDaoOpenAccountPage from '../../pageobjects/ios/dao/ios.daoaccountopen.page.js';
import AndroidDaoOpenAccountPage from '../../pageobjects/android/dao/android.daoaccountopen.page.js';
import IOSDaoCardCutomizationtPage from '../../pageobjects/ios/dao/ios.daocardcustomization.page.js';
import AndroidDaoCardCutomizationtPage from '../../pageobjects/android/dao/android.daocardcustomization.page.js';
import IOSDaoSetPasswordPage from '../../pageobjects/ios/dao/ios.daosetpassword.page.js';
import AndroidDaoSetPasswordPage from '../../pageobjects/android/dao/android.daosetpassword.page.js';
import IOSDaoAccountDetailsPage from '../../pageobjects/ios/dao/ios.daoaccountdetails.page.js';
import AndroidDaoAccountDetailsPage from '../../pageobjects/android/dao/android.daoaccountdetails.page.js';

const LandingPage = getPage({ ios: IosLandingPage, android: AndroidLandingPage });
const DaoInstructionsPage = getPage({ ios: IOSDaoInstructionsPage, android: AndroidDaoInstructionsPage });
const DaoContactDetailsPage = getPage({ ios: IOSDaoContactDetailsPage, android: AndroidDaoContactDetailsPage });
const DaoVerifyMobilePage = getPage({ ios: IOSDaoVerifyMobilePage, android: AndroidDaoVerifyMobilePage });
const DaoVerifyEmailPage = getPage({ ios: IOSDaoVerifyEmailPage, android: AndroidDaoVerifyEmailPage });
const DaoAccountTypesPage = getPage({ ios: IOSDaoAccountTypesPage, android: AndroidDaoAccountTypesPage });
const DaoEmploymentDetailsPage = getPage({ ios: IOSDaoEmploymentDetailsPage, android: AndroidDaoEmploymentDetailsPage });
const DaoTermsAndConditionsPage = getPage({ ios: IOSDaoTermsAndConditionsPage, android: AndroidDaoTermsAndConditionsPage });
const DaoPersonalInformationPage = getPage({ ios: IOSDaoPersonalInformationPage, android: AndroidDaoPersonalInformationPage });
const DaoIdentityVerificationPage = getPage({ ios: IOSDaoIdentityVerificationPage, android: AndroidDaoIdentityVerificationPage });
const DaoManualVerificationPage = getPage({ ios: IOSDaoManualVerificationPage, android: AndroidDaoManualVerificationPage });
const DaoSignatureOptionPage = getPage({ ios: IOSDaoSignatureOptionPage, android: AndroidDaoSignatureOptionPage })
const DaoResidentialAddressPage = getPage({ ios: IOSDaoResidentialAddressPage, android: AndroidDaoResidentialAddressPage })
const DaoWorkInformationPage = getPage({ ios: IOSDaoWorkInformationPage, android: AndroidDaoWorkInformationPage })
const DaoTaxDeclarationPage = getPage({ ios: IOSDaoTaxDeclarationPage, android: AndroidDaoTaxDeclarationPag })
const DaoOpenAccountPage = getPage({ ios: IOSDaoOpenAccountPage, android: AndroidDaoOpenAccountPage })
const DaoCardCutomizationtPage = getPage({ ios: IOSDaoCardCutomizationtPage, android: AndroidDaoCardCutomizationtPage })
const DaoSetPasswordPage = getPage({ ios: IOSDaoSetPasswordPage, android: AndroidDaoSetPasswordPage })
const DaoAccountDetailsPage = getPage({ ios: IOSDaoAccountDetailsPage, android: AndroidDaoAccountDetailsPage })

Given("user verify and click on open account button", async () => {
    await LandingPage.verifyAndClickOnOpenNewBankAccount();
});

When("user select create new application", async () => {
    await LandingPage.startNewJourney();
});

When("user select resume application", async () => {
    await LandingPage.startResumeJourney();
});

When("user will land to dao instructions screen and clicks on get started button", async () => {
    await DaoInstructionsPage.verifyDaoInstructionsAndProceedToContactDetails();
});

When("user will land to dao Contact Details screen and fill in contact details", async () => {
    await DaoContactDetailsPage.enterPhoneNoAndEmailID(daoData.phonenumber, daoData.email)
});

When("user will land to dao Contact Details screen and update email", async () => {
    await DaoContactDetailsPage.enterEmailID(daoData.email)
});

When("user enters the mobile OTP", async () => {
    await DaoVerifyMobilePage.enterMobileOTP(daoData.mobileotp)
});

When("user enters the email OTP", async () => {
    await DaoVerifyEmailPage.enterEmailOTP(daoData.emailotp)
});

When("user navigates to account opening fragment and clicks on next button", async () => {
    await DaoAccountTypesPage.verifyAccountOpeningAndClickNext();
});

When("user navigates to employment details", async () => {
    await DaoEmploymentDetailsPage.selectEmploymentStatus();
    await DaoEmploymentDetailsPage.enterMonthlySalary(daoData.monthlysalary)
});

When("user naviagte to term and conditions", async () => {
    await DaoTermsAndConditionsPage.verifyTermsandConditionandClickNext();
});

When("user navigates to personal information", async () => {
    await DaoPersonalInformationPage.verifyPersonalInformationPage();
    await DaoPersonalInformationPage.countryOfBirth(daoData.COB)
    await DaoPersonalInformationPage.placeofBirth(daoData.POB)
    await DaoPersonalInformationPage.normalCountryOfResident(daoData.NormalCountryOfResident)
    await DaoPersonalInformationPage.maritalStatus();
    await DaoPersonalInformationPage.continieBtn()
});

When("user naviagtes to Identity Verification", async () => {
    await DaoIdentityVerificationPage.selectUploadViaPhotoLibrary();
});

When("user navigates to EIDA Front and Back Manual Verification", async () => {
    await DaoManualVerificationPage.eidaFrontBackManualverification();
});

When("user selects the signature options", async () => {
    await DaoSignatureOptionPage.signatureOptionSelection();
});

When("user navigates to Passport Manual Verification", async () => {
    await DaoManualVerificationPage.ContinueBtn();
    await DaoManualVerificationPage.passportFrontManualVerification();
});

When("user navigates to Selfie capture", async () => {
    await DaoManualVerificationPage.ContinueBtn();
});

When("user navigates to Residential Address and submit details", async () => {
    await DaoResidentialAddressPage.fillResidentialAddress(daoData.Area, daoData.BUILDING, daoData.POBOX);
});

When("user navigates to Work Information and submit details", async () => {
    await DaoWorkInformationPage.fillworkInformationDetails(daoData.jobTitle, daoData.company);
});

When("user navigates to Tax Declaration", async () => {
    await DaoTaxDeclarationPage.taxpayerDetails();
    await DaoTaxDeclarationPage.submitTaxDetails();
});

When("user navigates to Open Account", async () => {
    await DaoOpenAccountPage.accountBenefits();
});

When("user navigates to Card Customization", async () => {
    await DaoCardCutomizationtPage.fillCardDetails(daoData.cardHolderName)
});

When("user navigates to Set Password", async () => {
    await DaoSetPasswordPage.setPassword(daoData.password, daoData.confirmPassword)
});

When("user navigates to Account Details", async () => {
    await DaoAccountDetailsPage.accountDetails();
});