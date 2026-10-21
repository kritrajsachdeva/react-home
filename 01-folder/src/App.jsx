import React from "react";

// function App() {
//   return 'hello'
// }

// what if we want to pass two things to div(root)
// const App = () => {
//   return (
//     <div id='parent'>
//     <h1 id = 'child 1'> Hello </h1>
//     <h2 id = 'child 2'> Hi </h2>
//     </div>
//   )
// }

// What if we want to pass 2 divs
const App = () => {
  return (
    <>
      <div id="parent">
        <h1 id="child 1"> Hello </h1>
        <h2 id="child 2"> Hi </h2>
      </div>
      <div id='chacha'>
        <h1> Hey </h1>
      </div>
    </>
  );
};
export default App;
