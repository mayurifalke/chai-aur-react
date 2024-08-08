import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  {Container,FormControl, InputGroup,Button, Card} from 'react-bootstrap'

const client_id = "2a63312b58c242dabc5849816ef6a0dc";
const client_secret = "c57e8f5c5e4b45da87a8b0c4db985db3"; 

async function App() {
    const [searchInput,setSearchInput] = useState("");
    const[accessToken,setAccesstoken] = useState("");

    useEffect(()=>{
      //API access token
      var authParameters = {
        method:'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:'grant_type=client_credentials&client_id='+ client_id + '&client_secret='+client_secret
      }

      fetch('https://accounts.spotify.com/api/token',authParameters)
      .then(result => result.json())
      .then(data => setAccesstoken  (data.access_token))
    },[])

    //we want async function this beacuse there will be multiple fetch statement

    async function search() {
      console.log("Search for "+ searchInput);
    }

    //Get request using search to get the Artist ID
    var searchParameters = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer' + accessToken
      }
    }

    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',searchParameters)
       .then(response => response.json())
       .then(data => console.log(data))
    // console.log(artistID)
  return (
   <div className='App'>
    <Container>
    <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for Artist"
          type='input'
          onKeyUp={(event)=>{
            if(event.key == 'Enter'){
              search()
            }
          }}
          onChange = {event =>{
            setSearchInput(event.target.value)
          }}
        />
          <Button  onClick = {console.log("Button click")}>Search</Button>
      </InputGroup>
    </Container>

    <Container>
      <div className='mx-2 row row-cols-4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </Container>
   </div>

  )
}

export default App
