import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Questions from './components/Questions/Questions'
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Questions></Questions>
    </div>
  )
}

export default App
