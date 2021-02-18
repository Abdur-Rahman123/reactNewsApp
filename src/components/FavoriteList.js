
import React from 'react';
import {Button,Container,Row,Col,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Headline from './Headline'

class FavoriteList extends React.Component {
  constructor(props){
    super(props);
    this.state={
        favoriteList:[]
    }
    
  }
  componentDidMount(){
     this.getFavoriteList();
  }
  getFavoriteList=()=>{
      var favObj={};
      var favoriteList=[];
      if(localStorage.getItem("favObj")){
          favObj=JSON.parse(localStorage.getItem("favObj"));
      }
      Object.keys(favObj).forEach((key)=>{
      favoriteList.push(favObj[key])
      });
      this.setState({
        favoriteList:favoriteList
      });
  }
  getArticle=(article,index)=>{
      return(
          <Col key={"index"}>
           <Headline article={article}></Headline>
          </Col>
      )
  }
  render()
  {
  return (
      <div> 
          <Container>
         <h1> Favorite List</h1>
         <Row>
         {this.state.favoriteList.map(this.getArticle)}
         </Row>
         </Container>
      </div>
  );
      
  }
}

export default FavoriteList;
