# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: .this in JavaScript is used to access values in an object from within it's scope. An example would help me to explain it better:

     let animal = {
        name : "Sach'a",
        hoomanAge: 5,
        dogYearsAge: 36,
        getDogInfo: function(){
          return `${this.name} the dog is ${this.hoomanAge} year old in human years but she's ${this.dogYearsAge} in dog years`
        }
    }
  Researched answer: The this keyword in behaves differently depending on the language, as such it can serve as a point of confusion for developers. It can be used as described above or it can have global context and exist outside of functions. It's behavior also changes when combined with 'use strict' - when used like this it's default value becomes 'undefined' instead of being the global object. 



2. What is React? Why would you use it?

  Your answer: React is the programming language developed by FaceBook to improve it's UX. Prior to react ny small change on a webpage would result in it having to reload which was time consumint and tedious- I'm old enough to remember it well. Without React people wouldn't use 'like' buttons or anything of the sort so  readily because it would result in an annoying page reload. React solved this problem by compartmentlising elements into components that can 'react' without the whole page having to reload. We can write components in such a way that they're easilyt reusable across different parts of a web/ mobile app.

  Researched answer: React is widely used and new libraries are released each year. It's easy to use and has a large community around it. React uses virtual doms (document object models) which are examined every time a change is made, it pinpoints the tree nodes and components that need to change and leaves the rest alone. It's unilateral data flow allows for efficient data checking and debugging.  



3. Which lifecycle method is required in a React class component?

  Your answer: A React lifecycle is made up of 3 parts: mounting, updating, and unmounting. There are different methods used at different stages in a component's lifecycle. 

  Researched answer: Mounting happens when elements are inputted into the DOM. The constructor method is used when mounting a component but there are 3 others 'getDerivedStateFromProps(), render(), and componentDidMount(). Constructor is our first port of call and its where we set state and other inital values. The render() methods outputs the HTML to the DOM. There are 5 builtin methods for updating a component and just one componentWillUnmount() for the final phase of it's lifecycle. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is an extension of JavaScript that's used with React to determine the look, feel, and functionality of a User interface (UI). 

  Researched answer: JSX produces React elements which can be rendered to the DOM. JSX can influcence how events are handles and how state changes. JSX isn't compulsory when using React but it makes it a lot easier to write React apps. 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: YARN stands for 'yet another resource negotiator'. It's a package manager and handles dependencies like NPM. 

  Researched answer: Create React App is an easy way to create single-page React applications. yarn.lock and package.json files are used when running React apps. yarn.lock has an identifier for the dependencies and sub-dependencies used in a project. JSON is an open standard file format and stands for JavaScript Object Notation. It's used to when data is sent from a server to a webpage. It's a file format that focuses on objects and arrays.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is Javascript is initialized without a name and can be invoked immediately. 

  Researched answer: We can pass anonymous functions to other functions as arguments. Anonymous functions are not accessible after their initial creation. Normal functions are broadly useful whereas anonymous functions are useful as IIFE's(Immediately Invoked Function Expressions).


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering describes the ability to render depending on a true/ false (boolean) evaluation. We can use it to alter components based on a condition. 

2. Object-oriented programming: Objects contain data and code. Object oriented programming uses data in 'fields' and code as 'proceedures'. In OOP proceedures can be attached to objects and used to modify the object's data. In OOP objects are the central coding element and they use franeworks abd 'ready functions'. Both FP and OOP are aimed at managing program states but while OOP relies on broken down objects to do this, FP relies on 2 fundamentals, input and output and functions depend entirely on the input data. FP and OPP are almost always used simulatenously. 

3. Ruby: Ruby is an open source programming language that focuses on simplicity and productivity. It's a dynamically typed language that was designed to be easy to learn. I guess we'll soon find out whether or not 'easy' hits the mark. It was writen by a Japanese chap, Yukihiro "Matz" Matsumoto and has a very strong, welcoming, and friendly community around it. Ruby enthusiasts are known as Rubyists. 

4. Ruby blocks: A block is a chunk of code. Ruby blocks are anonymous functions that we can pass into methods. They can have arguments which should be defined between 2 pipe characters (||).

5. Ruby hashes: A Rbyb hash is like an array but instead of using an integer index it indexes using arbitrary keys and can be of any object type. A Ruby hash is a KV pair separated by a fat arrow (=>). The following is a basic example of a Ruby hash bloodTypes = { A: 12, B:5, AB: 2, O: 28}.
