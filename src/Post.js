import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import './Post.css';
import axios from "axios";
import Search from "./Search/Search";

const Post = () => {

  const [data, setData] = useState([]);
    // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
    //   console.log(result);

      setData(result.data);
    };

    fetchData();
  }, []);
  // const data = props.data;
  // console.log(data);

  const [state, setState] = useState("");

  // console.log(data.filter(title=>title.title.toLowerCase().includes("su")));
  // const value = state;
  // console.log(value);


  // const search =(data)=>{
  //   if(state === ''){
  //     return '';
  //   }else{
  //     return data.filter((item) => item.title.toLowerCase().includes(state) || item.body.toLowerCase().includes(state))
  //   }
      
  // }

  let value = data.filter((value) =>{
    if(state === ''){
      return '';
    }else{
      return value.title.toLowerCase().includes(state) || value.body.toLowerCase().includes(state);
      
      
    }
    
  })
  
  
  
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("old value: ", state);
    setState("");
  };

  const handleChange = (e) => {
    // console.log(e);
    // const value = e.target.value;
    setState(e.target.value);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form
              onSubmit={handleSubmit}
              className="d-flex m-auto"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                name="state"
                value={state}
                aria-label="Search"
                onChange={handleChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Search data={value} state={state}></Search>
    </div>
  );
};

export default Post;



// data.filter((item) => item.title.toLowerCase().includes(state)

// data.slice(0,2)
// .filter((item) => item.title.toLowerCase().includes(state))


// if(state.length <=3){
//   return '';
// }else{
//   return value.title.toLowerCase().includes(state);
// }





// {


//   <ul>
//     {!value.length && state!== '' ? (
//       <li>No results</li>
       

//     ) : (
//       value.slice(0,2).map((item) => <li key={item.id}>{item.id}<br></br>{item.title}<br></br>{item.body}</li>)
//     )}
//   </ul>
// }




// let value = data.filter((value) =>{
//   if(state === ''){
//     return '';
//   }else{
//     return value.title.toLowerCase().includes(state) || value.body.toLowerCase().includes(state);
    
    
//   }
  
// }
