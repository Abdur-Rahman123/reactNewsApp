import logo from './logo.svg';
import './App.css';
import React from 'react';
import Headline from './components/Headline';
import {Navbar,Nav,NavDropdown, Container,Col,Row} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FullArticle from './components/FullArticle';
import FavoriteList from './components/FavoriteList';
import CategoryNews from './components/CategoryNews'

class App extends React.Component {
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
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=6094528f26e8440c894a4b709d5b6953")
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
    const{isLoaded,error,headlines}=this.state;
      if(error){
          return<div>Error: {error.message} </div>
      }
      else if(!isLoaded){
          return<div>Loading..</div>
      }
      else{
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">News</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">Favorite</Nav.Link>
      <NavDropdown title="Category" id="basic-nav-dropdown">
        <NavDropdown.Item href="/technology">Techonology</NavDropdown.Item>
        <NavDropdown.Item href="/business">Business</NavDropdown.Item>
        <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/health">Health</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<header >
          
        
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/technology" >
            <CategoryNews category="technology"></CategoryNews>
          </Route>
          <Route path="/business" >
            <CategoryNews category="business"></CategoryNews>
          </Route>
          <Route path="/sports" >
            <CategoryNews category="sports"></CategoryNews>
          </Route>
          <Route path="/health" >
            <CategoryNews category="health"></CategoryNews>
          </Route>
          <Route path="/favorite">
            <FavoriteList></FavoriteList>
          </Route>
          <Route path="/full_article" component={FullArticle} >
      
          </Route>
          <Route path="/">
          <Container class="mt-3">
            <Row>
        {this.state.headlines.map(this.getHeadline)}
        </Row>
        </Container>
          </Route>
        </Switch>
      </div>
      </header>
      </Router>
    </div>
  );
      }
  }
}

export default App;
