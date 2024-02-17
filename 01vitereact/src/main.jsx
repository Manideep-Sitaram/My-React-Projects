import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp (){
  return (
    <div>
      <h2>My Custom React App</h2>
    </div>
  )
}

const customElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: "Click me Here"
}

const someValue = "Some Value"

const customReactElement = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  "Click Me Here this is custom React Element",
  someValue,
)

const anotherElement = (
  <a href="">Click me Here</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp()
    // <MyApp />
    // anotherElement
    customReactElement
)
