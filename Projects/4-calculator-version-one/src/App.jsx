import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'
import DisplayBox from "./component/displayBox"
import AllButtons from "./component/AllButtons"

function App() {
  let data = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <center>
      <div className={styles.content}>
        <DisplayBox/>
        <AllButtons data = {data}/>
      </div>
    </center>
  )
}

export default App
