
import React from 'react';
import {Button,Container,Row,Col,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';

class FullArticle extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){

  }
  saveForLater=(article)=>{
    alert("article added");
    var favObj={};
    if(localStorage.getItem("favObj")){
      favObj=JSON.parse(localStorage.getItem("favObj"));
    }
    favObj[new Date().getTime()]=article;
    localStorage.setItem("favObj",JSON.stringify(favObj));
  }
  
  render()
  {
  return (
      <Container className="mt-2">
        <Row>
          <Col xs={12} md={4}>
         <Image width="300" src={this.props.location.state.article.urlToImage} />
          </Col>
          <Col xs={12} md={8} lg={7} style={{color:"white"}}>
          <h1 style={{color:"black"}}>{this.props.location.state.article.author}</h1>
          <p style={{color:"black"}}>{this.props.location.state.article.title}</p>
          <p style={{color:"black"}}>{this.props.location.state.article.description}</p>
          <p style={{color:"black"}}>{this.props.location.state.article.publishedAt}</p>
          <Button variant="danger" className="mr-2" ><a style={{color:"white"}} href={this.props.location.state.article.url} >Source</a></Button>
           <Button onClick={()=>this.saveForLater(this.props.location.state.article)} style={{color:"Blue"}}>Save for Later</Button>
          </Col>
        </Row>

      </Container>
  );
      
  }
}

export default FullArticle;
