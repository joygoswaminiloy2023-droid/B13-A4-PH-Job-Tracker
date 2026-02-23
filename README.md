## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS:
getElementById: Is a paramiterized function that owns html element by id and take into DOM to perform functionability.

Ex:let element = document.getElementById("myDiv");
console.log(element.innerText);

=> Output: Hello

getElementsByClassName: also a js peramiterized function that take class name as a parameter and owns HTML elements of that class name.

EX: let elements = document.getElementsByClassName("box");
console.log(elements.length);

=> Output: count total num of element who contains class name 'box'.

querySelector:is a way to pick the first element from HTML page using a CSS-style selector.
it can select by ID, class, tag.
It always gives only the first matching element.

let divMain = document.querySelector("#main");//by ID
let firstBox = document.querySelector(".box");//by Class
let firstDiv = document.querySelector("div");//by Tag

### 2. How do you create and insert a new element into the DOM?

Ans: by document.createElement("div")//it will create a div
and then to show the div we have to perform appendChild().

Ex:
let newPara = document.createElement("p");=>creating a paragraph,
newPara.innerText = "I am a new paragraph!";=>swap the paragraph innerttext,
let container = document.getElementById("container")//calling the mother element
container.appendChild(newPara);//now push the newpara into mother section

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is how events move up the DOM tree.
suppose if i click a button the event first happen in button then paren node then parent's parent node

ex:
<div_1>
<div_2><button>click<button></div_2>

</div>

flow of event:button => div_2 => div_1

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is when you attach a single event listener to a parent element instead of adding one to each child element.

The parent “catches” events from its children because of event bubbling.

then we can check which child was clicked using event.target.

it like a security camera , where parents watching all the child at a time dont need individual camera for each kid.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

stopPropagation()

Stops the event from bubbling up (or capturing down).
Example: If a button inside a div is clicked, the click won’t trigger the parent div’s event listener.

preventDefault()

Stops the default action of an element from happening.
Example: Clicking a link normally goes to another page. Using preventDefault() prevents that navigation.
