Feature: Registering a new user

Scenario: The user does not have a solid pod and will have a new pos
  Given A user without a pod
  When I click on the Get a Pod link
  Then I should be redirected to https://solidcommunity.net/register 

Scenario: The user will know about solid
  Given An already registered user
  When I click on the Get a Pod inf link
  Then I should be redirected to the link

  Scenario: The user is already registered in the site
  Given An already registered user
  When I click on the IniciarSesion
  Then I return to the home page
