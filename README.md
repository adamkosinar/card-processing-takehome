# Credit Card System Take-Home

Hello! Thank you for taking the time to look at my humble attempt to solve your take home test!
The solution is split to two parts, obviously. The backend (the API) and the frontend part written in react.
Please do note that I do not consider myself a react engineer so the solution probably leaves some things to be desired the but I did try my best considering the limited time I had
I still feel that it would not feel complete without the frontend part being present.

# How to run the backend

Nothing unusual there!
just cd into the backend folder and run

`npm i` to install all dependencies

`npm run test` to run all unit test and test coverage

and finally

`npm run start` to start the web server

I tried to keep all dependencies to a reasonable mininum with some exceptions... I am a big fan of dependency injection hence the use of very useful dependency
injection container [tsyringe](https://github.com/microsoft/tsyringe) - a powerful but minimal DI framework by microsoft

Also I hope you do not mind that I used [fastify](https://www.fastify.io/) as webserver and [zod](https://zod.dev/) for validation.

The design itself is quite straight forward, it is split into about three layers - the controller that handles all the basic stuff like routing, validation and error handling.
CardService which is meant to contain the business logic - mostly the luhn10 check and other stuff like making sure that you are not storing the same card multiple times
and lastly the Card Repository which is intended to encapuslate the persistance logic which in this case is just a in memory map but can be easily replaced by something more robust
like file, database etc.

# The Frontend

again

cd into the frontend directory

`npm i` to install all dependencies

`npm start` to run the project

there is nothing much exiting there, just a basic react app with bootstrap. I would like to apologise for the the poor state management there as I use only hooks and basic states there
ideally I would probably use redux or something like that if I had more time to spare, I do hope that will do for the time being tho. 


