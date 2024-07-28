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
        render() {
            let dynamicName = 'React is very good'
            let brand = 'dominos'
            return (
                <>
                  <h1>this is class component</h1>
               <h1>
                {dynamicName}
                {brand}
               </h1> 
                </>
              
            )
        }
    }
    // export default App;
}