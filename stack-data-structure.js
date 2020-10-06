class Stack {
  constructor() { //we need a constructor because we will have to put in properties. Constructor is a method that runs once we instantiate objects from class.  

    this.items = [] //we need a place to store data 
    this.count = 0//have a count that tells where we are; basically the position of the element because I will not be using length property of javascript. It will be as low level as possible. 
  }

  //add element to top of stack
  push(element) {
    this.items[this.count] = element
    console.log(`${element} added to ${this.count}`)
    this.count += 1;
    return this.count -1
  }

  //Return and remove top element in stack
  //return undefined if stack is empty
  pop() {  //it doesn't need to take anything in because it's just popping off the top. 
    if (this.count == 0)  //if it's empty, return nothing. 
      return undefined
    let deleteItem = this.items[this.count - 1] //we subtract 1 because our stack is 0th based. 
    this.count -= 1 //we have to decrease the count because we are taking one off 
    console.log(`${deleteItem} removed`)
    return deleteItem 
  }

  //Check top element in stack 
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`)
    return this.items[this.count - 1] //this is top level item 
  }

  //check if stack is empty
  isEmpty() { //check if the count equals to 0
    console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.count == 0  // will give us true or false 
  }

  //check size of stack 
  size() { //we just need to return the count 
    console.log(`${this.count} element in stack`)
    return this.count
  }

  //print elements in stack 
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " " //we want to append to it 
    }
    return str
  }

  //clear stack 
  clear() {
    this.items = []
    this.count = 0
    console.log("Stack cleared")
    return this.items
  }
}

//initialize variable to our class. Create stack object. 
const stack = new Stack

stack.isEmpty() //we are putting on top because we know that the list is empty as of now. 
// Stack is empty


//adding on to stacks using .push
stack.push(100)
stack.push(200)

stack.peek()
// 100 added to 0
// 200 added to 1
// Top element is 200   // it's 200 because it's on the top of the list and we haven't pushed 300 yet. 


stack.push(300)

// this is the result of console.log(`${element} added to ${this.count}`)
// 100 added to 0       //it means that 100 is added to 0th position
// 200 added to 1       //200 is added to 1st position
// 300 added to 2       //300 is added to 2nd position 

console.log(stack.print())
// 100 200 300 


stack.pop()   //will remove the most top item, which will be the last one added. The last we added will be the top. 
// 100 added to 0
// 200 added to 1
// 300 added to 2
// 300 removed //300 is removed because it's on the top of the stack 

stack.pop() //if we call pop again, it will remove 200. 
// 100 added to 0
// 200 added to 1
// 300 added to 2
// 300 removed
// 200 removed

stack.clear()
// Stack cleared

console.log(stack.print())
// 100


stack.size()
// Stack is empty
// 100 added to 0
// 200 added to 1
// Top element is 200
// 300 added to 2
// 300 removed
// 200 removed
// 1 element in stack   //there is only 1 element because we got rid of 300 and 200. 

// stack.pop()
// 100 added to 0
// 200 added to 1
// 300 added to 2
// 300 removed
// 200 removed
// 100 removed 

// console.log(stack.pop()) //if we call it again, we get undefined because it's empty. 
// 100 added to 0
// 200 added to 1
// 300 added to 2
// 300 removed
// 200 removed
// 100 removed
// undefined


// console.log(stack.push(100))
// 0 because it gives me the position of 0. it's saying that number 0 is at 0th position. 


stack.isEmpty()
// Stack is empty
// 100 added to 0
// 200 added to 1
// Top element is 200
// 300 added to 2
// 300 removed
// 200 removed
// 100 removed
// undefined
// Stack is empty