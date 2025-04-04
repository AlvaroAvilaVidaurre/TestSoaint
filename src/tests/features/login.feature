Feature: Login
    Feature Login page will work depending on the user credentials.

    Scenario: Success Login
        Given A web browser is at the saucelabs login page
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        Then the url will contain the inventory subdirectory

    Scenario: Failure Login When Invalid Credentials
        Given A web browser is at the saucelabs login page
        When A user enters the username "invalid_user", the password "invalid_password", and clicks on the login button
        Then The user should see an error message indicating that the login failed with the message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Failure Login When Username and Password are Empty
        Given A web browser is at the saucelabs login page
        When A user leaves the username and password fields empty and clicks on the login button
        Then The user should see an error message indicating that the login failed with the message "Epic sadface: Username is required"

    Scenario: Failure Login When Username is Empty and Password is Valid
        Given A web browser is at the saucelabs login page
        When A user enters the username "", the password "secret_sauce", and clicks on the login button
        Then The user should see an error message indicating that the login failed with the message "Epic sadface: Username is required"

    Scenario: Failure Login When Username is Valid and Password is Empty
        Given A web browser is at the saucelabs login page
        When A user enters the username "standard_user", the password "", and clicks on the login button
        Then The user should see an error message indicating that the login failed with the message "Epic sadface: Password is required"

    Scenario: Failure Login When User is locked out
        Given A web browser is at the saucelabs login page
        When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
        Then The user should see an error message indicating that the login failed with the message "Epic sadface: Sorry, this user has been locked out."
