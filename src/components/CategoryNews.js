
import React from 'react';
import Headline from './Headline';
import {Navbar,Nav,NavDropdown, Container,Col,Row} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FullArticle from './FullArticle';
import FavoriteList from './FavoriteList';


class CategoryNews extends React.Component {
  constructor(props){
    super(props);
    this.state={
      headlines:[],
      isLoaded:false,
      error:null
  }
  }
  componentDidMount(){
    this.getLatestHeadLines();
  }
  getLatestHeadLines=()=>{
      var category=this.props.category;
    fetch("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey=6094528f26e8440c894a4b709d5b6953")
    .then(res=>res.json())
    .then(
        (result)=>{
            console.log(result);
            this.setState({
               headlines:result.articles,
               isLoaded:true
            });
        },
        (error)=>{
            this.setState({
                error:error,
                isLoaded:true
            })
        }
    )
}
getHeadline = (article,index)=>{
  
     return(
      <Col key={"index"} className="mb-5">
        <Headline article={article}></Headline>
      </Col>
     );
}
  render()
  {
  return (
    <Container class="mt-3">
    <Row>
          {this.state.headlines.map(this.getHeadline)}
    </Row>
    </Container>
  );
      
  }
}

export default CategoryNews;
