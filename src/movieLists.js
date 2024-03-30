import { Component } from "react";
import MovieCard from "./movieCards";


class MovieLists extends Component{
    
    render(){
        const {movies,addStars,decStars,handleCart,handleFav}=this.props;
        return(
          <>
          {movies.map((movie,index)=>(<MovieCard movies={movie} 
                                                key={movie.id}
                                                addStars={addStars}
                                                decStars={decStars}
                                                handleFav={handleFav}
                                                handleCart={handleCart}
                                      />))}                  
          </>
        )
    }
}

export default MovieLists