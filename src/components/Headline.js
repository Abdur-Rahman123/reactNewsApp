
import React from 'react';
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Healine extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){

  }
  
  render()
  {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.article.urlToImage} />
    <Card.Body>
      <Card.Title>{this.props.article.title}</Card.Title>
      <Card.Text>
      {this.props.article.description ? this.props.article.description.substr(0,20) : " "}
      </Card.Text>
      <Link to={{pathname:"/full_article", state: {article:this.props.article } }}>Read</Link>
    </Card.Body>
  </Card>
  );
      
  }
}

export default Healine;
