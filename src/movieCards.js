import {Component} from "react";

class MovieCard extends Component{
     
  /*  addStars=()=>{
        if(this.state.stars>=5){
            return;
        }

    //Form 1

       this.setState({
         stars:this.state.stars+0.5
      })

    //Form 2

       this.setState((prevState)=>{
          return {stars:prevState.stars+0.5}
    })

    }

    decStars=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState({
            stars:this.state.stars-0.5
        })
    }

    handleFav=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    
    handleCart=()=>{
        this.setState({
            isInCart:!this.state.isInCart
        })
    }  
    
    */

    render(){
        const{movies,addStars,decStars,handleFav,handleCart}=this.props;
        const {title,plot,poster,price,rating,star,fav,isInCart}=this.props.movies;
       
        return( 

        <>
        <div className="main">
            <div className="movie-card">

                <div className="left">
                  <img alt="Poster" src={poster} />
                </div>

                <div className="right">

                   <div className="title">{title}</div>
                   <div className="plot">{plot}</div>
                   <div className="price">Rs. {price}</div>

                    <div className="footer">
                       <div className="rating">{rating}</div>
                       <div className="star-dis">
                        <img alt="min" 
                        src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                        className="str-btn" 
                        onClick={()=>{decStars(movies)}}/>
                        
                        <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>

                        <img alt="inc" 
                        src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" 
                        className="str-btn"
                        onClick={()=>{addStars(movies)}}/>

                        <span className="starCount">{star}</span>
                       </div>

                        {fav?<button className="unfavourite-btn" onClick={()=>{handleFav(movies)}}>Unfavourite</button>:
                        <button className="favourite-btn" onClick={()=>{handleFav(movies)}}>Add to Fav</button>}
                       
                       
                        <button className={isInCart?"uncart-btn":"cart-btn"} onClick={()=>{handleCart(movies)}}>{isInCart?"Remove from cart":"Add to cart"}</button>
                    </div>
                </div>
            </div>
        </div>       
        </>
    )}
}
export default MovieCard;