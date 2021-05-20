# Axe-con React Testing Project

## About

This is a demo react application that shows the use of axe-core in the test process. It demonstrates the fact the axe-core testing requires multiple levels of test in order to properly catch the accessibility issues in your development process. 

##Structure


```
axe-con-react-tester
│   README.md
└───src 
│   └───components
│   └───pages
│   └───test
        └───component
        └───integration
        └───utils (where the customer reporter lives)

## Component Testing

Component testing in this project is done with Jest and React Testing Library. Each component is tested for basic functionality and then has an axe-core scan associated with it. 

A great example test case is the <b>footer.spec.js</b>


## Integration Testing

The integration testing uses reacts scripts to build the project and concurrently run the selenium webdriverjs test cases. In these selenium test cases we can see the resulting output of our components put onto a single page. 

A great example test case is the <b>shop.spec.js</b>

