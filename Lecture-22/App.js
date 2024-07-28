function App() {
    return (
        <>
              <header>
            this is header
        </header>
        <p>
            this is the para
        </p>
        </>
  
    )
    class App extends Component {
        state = {
            name: "react",
            description: "react is very good",
            description2: "this is an frontend library",
            types: [
                {name: "state", useState: "useEffect"},
                {name: "props", useState: "useContext"},
                {name: "component", useState: "useRef"},
                {name: "context", useState: "useReducer"},    
            ]
        }
        render() {
            let dynamicName = 'React is very good'
            let brand = 'dominos'
            let price = 220
            return (
                <>
                  <h1>this is class component</h1>
               <h1>
                {dynamicName}
                {brand}
                {price}
               </h1> 
               <div class='container'>
                {this.state.types.map((type) => {
                    return <h3>{type.name}</h3>
                })}
               </div>
               <div>
                 {/* conditional rendering  */}
                {this.state.name === "react" ? <h1>yes</h1> : <h1>no</h1>}
               </div>
                </>
              
            )
        }
    }
    // export default App;
}