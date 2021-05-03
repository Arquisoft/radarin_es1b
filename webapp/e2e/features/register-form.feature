Feature: Registering a new user

Scenario: The user does not have a solid pod and will have a new pos
  Given A user without a pod
  When  Conseguir nuevo pod  
  Then I should be redirected to https://solidcommunity.net/register 

Scenario: The user will know about solid
  Given'An unregistered user
  When Conseguir nuevo pod 
  Then I should be redirected to the link

  Scenario: The user is already registered in the site
  Given An already registered user
  When Boton iniciarsesión
  Then An error message should be shown in the screen