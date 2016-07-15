# microservice-bootstrap
My coception of a microservice project, implemented using docker-compose

This projecy has:

* Docker compose
* Nginx - as a reverse proxy
* user-service 
* user-storage
* website

##Authetication
I am uisng jwt token to authinticate a user across services, and passport to autheticate the user in the user_service. 
Corrently I support only Facebook authetication, but adding another authtication strategy shouldn't be a problem 
Editing *user_service/config/passport* with you own credentials.
