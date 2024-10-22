Feature: Digital Account Opening for the ENBD X application

  @dao_OpenNewBankAccount
  Scenario Outline: User Open New Bank Account 
    Given user verify and click on open account button
    When user select create new application
    When user will land to dao instructions screen and clicks on get started button
    When user will land to dao Contact Details screen and fill in contact details
    When user enters the mobile OTP
    When user enters the email OTP
    When user navigates to account opening fragment and clicks on next button
    When user navigates to employment details
    When user naviagte to term and conditions
    When user navigates to personal information
    When user naviagtes to Identity Verification
    When user navigates to EIDA Front and Back Manual Verification
    # When user selects the signature options
    When user navigates to Passport Manual Verification
    When user navigates to Selfie capture
    When user navigates to Residential Address and submit details
    When user navigates to Work Information and submit details
    When user navigates to Tax Declaration
    When user navigates to Open Account
    When user navigates to Card Customization
    When user navigates to Set Password
    When user navigates to Account Details

