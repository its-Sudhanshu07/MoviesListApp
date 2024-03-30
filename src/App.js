import React from "react";
import MovieLists from "./movieLists";
import Navbar from "./Navbar";
import { movie } from "./moviesData";

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
        movies : movie,
        cartCount:0
    }
}

handleIncStar=(movie)=>{

  const{movies}=this.state;
  const mid=movies.indexOf(movie);

  if(movies[mid].star <5){
    movies[mid].star += 0.5
  }

  this.setState({
       movies:movies
  })
}

handledecStar=(movie)=>{

  const{movies}=this.state;
  const mid=movies.indexOf(movie);

  if(movies[mid].star >0){
    movies[mid].star -= 0.5
  }

  this.setState({
       movies:movies
  })
}

handleFav=(movie)=>{
  const{movies}=this.state;
  const mid=movies.indexOf(movie);

  movies[mid].fav=!movies[mid].fav
  this.setState({
    movies
  })
}

handleCart=(movie)=>{
  let {movies,cartCount}=this.state;
  const mid=movies.indexOf(movie);

  movies[mid].isInCart=!movies[mid].isInCart
  
  if(movies[mid].isInCart){
    cartCount=cartCount+1;
  }
  else{
    cartCount -=1;
  }

  this.setState({
    movies,
    cartCount
  })
  console.log(cartCount)
}

  render(){
    const {movies,cartCount}=this.state;
    return(
    <>
    <Navbar cartCount={cartCount}/>   
    <MovieLists movies={movie}
      addStars={this.handleIncStar}
      decStars={this.handledecStar}
      handleFav={this.handleFav}
      handleCart={this.handleCart}/>
    </>
  )}
}

export default App;