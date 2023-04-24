
// Q.No:1 class Movie:

class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
          
       if(this.rating == undefined)
       {
        this.rating = "PG";    //Default movie rating:"PG"
       }
       return(`Rating: ${this.rating }`);
    }

    movieDetail(){
      if(this.rating == undefined)
      {
       this.rating = "PG";    //Default movie rating:"PG"
      }
      return(`Tittle:${this.title} Studio:${this.studio} Rating: ${this.rating} `);
  }

    }
    
 
 let movie1 = new Movie ("K.G.F: Chapter 2","Hombale Films","PG15");
 let movie2 = new Movie ("Vikram","Raaj Kamal Films International","PG14");
 let movie3 = new Movie ("Viruman","2D Entertainment");
 let movie4 = new Movie ("Casino Royale","Eon Productions","PG13");
 

 console.log(movie1.getPG()); //Rating: PG15
 console.log(movie2.getPG()); //Rating: PG14
 console.log(movie3.getPG()); //Rating: PG
 console.log(movie4.getPG()); //Rating: PG13
 console.log(movie4.movieDetail()); //Tittle:Casino Royale Studio:Eon Productions Rating: PG13 