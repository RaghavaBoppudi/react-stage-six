
function Button(){
  // you can also pass in arguments as so:
  // const handleClick2 = (name) => console.log("Ouch!")

  //With click events, we are provided with e (event parameter). e.target is the internal target.

  const handleClick = (e) => e.target.textContent = "Ouch!😒"

  return(
    // passing an argument to a function will invoke it immediately, so to avoid doing that when we have arguments to pass, we can wrap this callback within a function expression / arrow function like so:
    // <button onClick={() => handleClick("Rv")}>Click Me!😂</button>
    // This will ensure the function executes ONLY when the button is clicked.
    // onDoubleClick is used to trigger an event upon double clicking a button element.
    <button onDoubleClick={(e) => handleClick(e)}>Click Me!😂</button>
  )
}

export default Button