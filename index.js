// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");


// {/* <div id="roots">
//     <div id="one">
//         <h1>I am H1</h1>
//         <h2>I am H2</h2>
//     </div>
//     <div id="two">
//         <h1>I am H1</h1>
//         <h2>I am H2</h2>
//     </div>
// </div> */}

const main = React.createElement("div", { id: "roots" }, [
    React.createElement("div", { id: "one" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", { id: "two" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ])
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(main);