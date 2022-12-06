import React from 'react';
import Card from 'react-bootstrap/Card';

function Search(props) {
    const data = (props.data);
    const state = (props.state);
    console.log(typeof(state));
  return (
    <>
      
      {!data.length && state!== '' ? (
        <li>No results</li>
         
  
      ) : (
        data.slice(0,2).map((item) => <Card style={{ width: '18rem' }} key={item.id}>
        <Card.Body>
          <Card.Title>{item.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.title}</Card.Subtitle>
          <Card.Text>
            {item.body}
          </Card.Text>
        </Card.Body>
      </Card>)
      )}
      
    </>
  )
}

export default Search

