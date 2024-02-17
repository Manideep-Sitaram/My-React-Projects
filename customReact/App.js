function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    for(prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    domElement.innerHTML = reactElement.children

    container.appendChild(domElement)
}

const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me Here"
}

customRender(reactElement,mainContainer);