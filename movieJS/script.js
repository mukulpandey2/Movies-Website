// hollywood tranding movies 

const hollywoodtrandingMovies = [
  {
    MovieImage: "pics/holly/super mario.jpg",
    MovieTitle: "	The Super Mario Bros. Movie",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/shazam.jpg",
    MovieTitle: "Shazam! Fury of the Gods",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/tranding antman.jpg",
    MovieTitle: "	Ant-Man and the Wasp: Quantumania",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/avatar2.jpg",
    MovieTitle: "	Avatar: The Way of Water",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/gotg3.jpg",
    MovieTitle: "		Guardians of the Galaxy Vol. 3",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/renfield.jpg",
    MovieTitle: "Renfield",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/popes.jpg",
    MovieTitle: "	The Pope's Exorcist",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  },
  {
    MovieImage: "pics/holly/evil.jpg",
    MovieTitle: "		Evil Dead Rise",
    Director: " Louis Leterrier",
    Writers: "Zak Penn, Stan Lee, Jack Kirby",
    Stars: "Edward Norton, Liv Tyler, Tim Roth",
  }
];
const bollywoodtrandingMovies = [
  {
    MovieImage: "pics/bolly/Adipurush-2.jpg",
    MovieTitle: "	Adipurush",
    Director: " Ashutosh Gowariker",
      Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
      Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/trandingmovie/jawan.jpg",
    MovieTitle: "jawan",
    Director: " Ashutosh Gowariker",
      Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
      Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/trandingmovie/kisikabhai.jpg",
    MovieTitle: "	Kisi Ka Bhai Kisi Ki Jaan ",
    Director: " Ashutosh Gowariker",
    Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
    Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/trandingmovie/bholaa.jpg",
    MovieTitle: "	Bholaa",
    Director: " Ashutosh Gowariker",
      Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
      Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/bolly/Selfiee.jpg",
    MovieTitle: "	Selfiee",
    Director: " Ashutosh Gowariker",
      Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
      Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/bolly/The-Kerala-Story-3.jpg",
    MovieTitle: "The Kerla Story",
    Director: " Ashutosh Gowariker",
      Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
      Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/trandingmovie/bramhastra.jpg",
    MovieTitle: "Bramhastra Part One : Shiva",
    Director: " Ashutosh Gowariker",
    Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
    Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  },
  {
    MovieImage: "pics/trandingmovie/lcc.jpg",
    MovieTitle: "	Laal Singh Chaddha",
    Director: " Ashutosh Gowariker",
    Writers: "M.G. SathyaAshutosh Gowariker, Sameer Sharma",
    Stars: "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal",
  }
];



const trandinghollywoodCard = document.querySelector('.trandinghollywoodCard');
trandHolly= () =>{
  hollywoodtrandingMovies.map((postdata , index)=>{
    // console.log(index)
    hollyTrandelement =document.createElement('div');
    hollyTrandelement.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'col-12', 'p-2')
    hollyTrandelement.innerHTML = `

    <div class="card " data-toggle="modal" data-target="#modalId">
                <img src="${postdata.MovieImage}" alt="" class="card-img-top">
                <div class="card-body">
                    <h2 class="card-title ">${postdata.MovieTitle}</h2>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">${postdata.Director}</p>
                        <p class="card-text">${postdata.Writers}</p>
                        <p class="card-text mr-4 text-success">${postdata.Stars}</p>
                        
                    </div>   
                                    
                </div>
            </div>
    ` 
    trandinghollywoodCard.appendChild(hollyTrandelement);
  })
}
trandHolly();

const trandingbollywoodCard = document.querySelector('.trandingbollywoodCard');
trandBolly= () =>{
  bollywoodtrandingMovies.map((postdata , index)=>{
    bollyTrandelement =document.createElement('div');
    bollyTrandelement.classList.add('col-sm-12','col-md-4','col-lg-3','col-12','p-2')
    bollyTrandelement.innerHTML = `
    
    <div class="card " data-toggle="modal" data-target="#modalId">
    <img src="${postdata.MovieImage}" alt="" class="card-img-top">
    <div class="card-body">
        <h2 class="card-title">${postdata.MovieTitle}</h2>
        <div class="d-flex justify-content-between">
            <p class="card-text">${postdata.Director}</p>
            <p class="card-text">${postdata.Writers}</p>
            <p class="card-text mr-4 text-success">${postdata.Stars}</p>
        </div>                   
    </div>
</div>
      
    ` 
    trandingbollywoodCard.appendChild(bollyTrandelement);
  })
}
trandBolly();
// jquery code 
$(document).ready(function () {
  $(".card").click(function () {
    $(".rounded").attr("src", $(this).children().siblings().attr("src"));
    $(".Mtitle").text($(this).children(".card-body").children().siblings("h2").text());
    $(".Mdirector").text($(this).children(".card-body").children(".d-flex").find("p:nth(0)").text());
    $(".Mwriter").text($(this).children(".card-body").children(".d-flex").find("p:nth(1)").text());
    $(".Mstars").text($(this).children(".card-body").children(".d-flex").find("p:nth(2)").text());

  });
  // $(window).resize(function () {
  //   if ($(window).width() < 600) {
  //     $(".modal-content").css("transform", "scaleX(1)");
  //   }
  //   else {
  //     $(".modal-content").css("transform", "scaleX(1.4)");
  //   }
  // });
});
