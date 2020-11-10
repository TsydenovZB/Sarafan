# Sarafan
Simple social network RESTful Spring Boot application with registration, subscriptions and comments on VueJS
The application has social network functions such as: 
* Registration
* Authorization
* Subscribing to other users
* Add/delete/edit posts
* Comments to posts
* Preview links
* Interactive transfer of information between different users

## Structure  
The **_Config_** package contains the configuration of the application.  
The **_Controller_** package contains the implementation of the Controller from MVС.  
The **_Domain_** package stores entities that are tables in the database.   
The **_Dto_** package implements the pattern **Data Transfer Object**.  
The **_Repository_** package contains components that implement access to data in the database.  
The **_Service_** package contains business logic.  

## Technologies used:
- Project builder: **Gradle**
- Registration and authentication: **Spring Security**
- Database: **PostgreSQL**
- Package manager: **Yarn**
- Module bundler: **Webpack**
- Data transfer: **Websocket** with library **SockJS** and sending a message using the **Stomp** protocol
- Serializing data: **JsonView**
- Router: **VueRouter**
Previewing links on the **Open Graph Protocol** website
