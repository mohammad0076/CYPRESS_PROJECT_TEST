Feature: Automate the ORANGRHRM-admin website
   
    Background:login
        Given user visits site
        Then click the login button
        Then write username
        Then write passaword
        Then click the submit button
        Then verify as a admin

    Scenario:add to cart
        Then click a product
        Then click add to cart
        Then go the cart url
        # Then verify the product added or not
        Then verify the peoduct price
    Scenario:delete from cart
        Then go to cart url
        Then verify the peoduct name
        Then click the delete button
            

    Scenario:place order
        When go to cart button
        Then user click the place order button
        Then fill the name
        Then fill the country
        Then fill the city
        Then fill the credit card
        Then fill the month
        Then fill the year
        Then click the purchage button
        Then verify the order
        