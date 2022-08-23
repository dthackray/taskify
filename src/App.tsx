import React from 'react';
import './App.css';

let name: string
let age: number | string
let isStudent: boolean
let hobbies: number[]
let role: [number, string]

// type Person = {
//   name: string,
//   age?: number
// }

// let person: Person = {
//   name: "Dan",
// }

// let manyPeople: Person[]

// let printName: (name: string) => void

// name = "Dan"
// age = ""

interface Person {
  name: string,
  age?: number
}

interface Guy extends Person {
  profession: string
}



function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;