# Frontend Training

This repository is a frontend training to practice angular architecture, making better decisions and learning how to test better.

## Requirements

- NodeJS LTS 12.13.1  and npm without sudo
- VSCode
- Angular/cli - npm install -g @angular/cli
- json-server - npm install -g json-server

## How to setup
- Inside the training folder type, install de dependencies:

```
npm install
```

## Run the project

Before start the project you should run the APIs:
```
npm run apis
```

and then start the project: 
```
npm start
```

## Run tests
- npm run test:watch - watch mode to testing
- npm run test:snapshot - Re-generate snapshots

## What we are building

 My company specializes in selling motorized vehicles. Until recently, we only had brick and mortir stores. In the last few months, we have decided to migrate our operational system to the cloud. To achieve this, we have hired Juquinha, a PHP and Wordpress web designer specialist. 

Digging into some forums in the deep web, I have found that nowadays, Angular is the best web framework and because of this, I've asked Juquinha (web development specialist) to build our online store in Angular.

Our problem now is that Juquinha started another JavaScript project and cannot continue the online store development. That's why I have contacted ilegra to help with our frontend application and another company to help with the backend.

## Requirements

- Our store should be able to show 3 kinds of vehicles: cars, motorcycle and trucks
- The price must be in Dollar, but I want in the future migrate my ops to another country and support others currency.
- The vehicle title should be `${this.brand} - ${this.model} - ${this.year}`
- I want to show the units available in the stock and if it's 0, should show some label informing this. You might use some BAUX team expertise in this part 
- Today I need to add another vehicle on HTML page and this is very hard for me. I think the data should come from something called "backend"
- The pagination should work, but is not and I don't know why
- I want to search a vehicle by the title information
- I must be able to create another vehicle - with an image, brand, model, year and the price
- The buy button should show an alert with the number +5555123123 and an email superawesomevehiclesstore@pop.com

## Rules

- As a P.O. I've already prioritize the requirements, we must follow the requirements order.
- We must care with perfomance
- You should do this training in group
- You must create a module test to mock your dependencies and help others developers to setup the tests
- You must create tests for everything
- A "PO" might ask you to change anything at anytime, so your code must be working ALWAYS, all the TIME.
- The backend will be simulate by JSON Server (npm run apis)
- We will use a dynamic called TDD Ping Pong
- Each team should have:
  - One member to think what kind of tests we must have
  - One member to IMPLEMENT tests before programming, following the requirements
  - One member to programming and making the tests pass
