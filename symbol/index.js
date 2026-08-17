// *** creating Symbol *******

// // const sym = Symbol("Hello Bother");
// // console.log(sym);

// // const obj = {};
// // obj[sym]= "Prakash"

// //  console.log(obj[sym])

// const name = Symbol();

//  const person = {
//     [name]:"Prakash",
//     age:20
//  }

//  for( const prop in person)
//  {
//      console.log(prop)
//  }

//   console.log(Object.keys(person))
//   console.log(Object.getOwnPropertyNames(person))

//   console.log(Object.getOwnPropertySymbols(person));

// // console.log(person.name);
// // console.log(person[name]);

//****** Description add in symbol *******

// const propSymbol = Symbol("property symbol");
//  console.log(propSymbol.description)

// ***** Global symbol *****

// const globalSymbolKey = "my-prakash-symbol";
// const newSymbol = Symbol.for(globalSymbolKey);

// console.log(newSymbol === Symbol.for(globalSymbolKey));
// console.log(newSymbol);

// console.log(Symbol.keyFor(newSymbol))

// ***** Symbol.toPrimitive  *******

// It lets you control what value an object becomes when JavaScript converts that object into a primitive.
// const movie = {
//     name:"Jurassic Park",
//     releaseDate: "09,June,1993",
//     [Symbol.toPrimitive] (hint){
//         if(hint === 'number')
//         {
//             return new Date(this.releaseDate).getDay()
//         }else
//         {
//             return this.name
//         }
//     }
// }

//  console.log(Number(movie))
//   console.log(String(movie))

// ***** Symbol.toStringTag ******

// console.log({}.toString());
//  const arr = [1, 2, 3];
//  //console.log(arr.toString())

//  console.log(Object.prototype.toString.call(arr));


// const task ={
//     title: "exercise",
//     isComplete: false,
//     [Symbol.toStringTag] :"MyTag"
// }

//  console.log(task.toString())


// ***** Symbol.isConcatSpreadable *****

const arr = [1,2,3]
// console.log([4,5].concat(arr))

 arr[Symbol.isConcatSpreadable] =
 console.log([10,11].concat(arr))
