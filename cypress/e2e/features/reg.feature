Feature:Automate the demoblaze-admin website

   
       

        
   Scenario:INvalid Admin
       Given user visits the site
       Then click a login button
       Then fill username
       Then fill passaword
       Then click submit  button

 
   

    Scenario:valid Admin
        Given user visits site
        Then click the login button
        Then write username
        Then write passaword
        Then click the submit button
        Then verify as a admin
  


 
    # Scenario:user search options
    #     When click the submit button to go next
            

    