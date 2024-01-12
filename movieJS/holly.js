 // movie card details code here

 const hollywoodMovies = [
    {
      MovieImage: "pics/holly/pxfuel.jpg",
      MovieTitle: "Pirates of the Caribbean",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    },
    {
      MovieImage: "pics/holly/pxfuel (2).jpg",
      MovieTitle: "Gods of Egypt",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/pxfuel (3).jpg",
      MovieTitle: "Morbius",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/pxfuel (4).jpg",
      MovieTitle: "The Lost City",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/pxfuel (1).jpg",
      MovieTitle: "Jack the Giant Slayer",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/avatar.jpg",
      MovieTitle: "Avatar",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/carrie.jpg",
      MovieTitle: "Carrie",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/hulk.jpg",
      MovieTitle: "The Incredible Hulk",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/birds of prey.jpg",
      MovieTitle: "Birds Of Prey",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/civil war.jpg",
      MovieTitle: "Captain America: Civil War",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/docter strange.jpg",
      MovieTitle: "Doctor Strange",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/dungeouns.jpg",
      MovieTitle: "Dungeons & Dragons: Honor Among Thieves",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/manadalorian.jpg",
      MovieTitle: " The Mandalorian",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/007.jpg",
      MovieTitle: "No Time to Die",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/meg.jpg",
      MovieTitle: "The Meg",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/miss pere.jpg",
      MovieTitle: "Miss Peregrine's Home for Peculiar Children",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/no way home.jpg",
      MovieTitle: "Spider-Man: No Way Home",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/superpets.jpg",
      MovieTitle: "DC League of Super-Pets",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/warcraft.jpg",
      MovieTitle: "Warcraft",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/x-men.jpg",
      MovieTitle: "X-Men: Apocalypse",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
      MovieImage: "pics/holly/gosted.jpg",
      MovieTitle: "Ghosted",
      Director: " Louis Leterrier",
      Writers: "Zak Penn, Stan Lee, Jack Kirby",
      Stars: "Edward Norton, Liv Tyler, Tim Roth",
    }, {
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
    }
  ];

  const hollywoodContainer = document.querySelector('.hollywoodCard');
  // console.log(postContainer)
  const hollyMethod = () => {
    hollywoodMovies.map((postdata, index) => {
      // console.log(postdata);
      // console.log(index);
      const hollyElement = document.createElement('div');
      hollyElement.classList.add('col-sm-12', 'col-md-6', 'col-lg-3', 'col-12', 'p-2')
      hollyElement.innerHTML = `

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
      hollywoodContainer.appendChild(hollyElement);
    });
  }
  hollyMethod();


  //  jQuery Code here

  $(document).ready(function () {
    $(".card").click(function () {
      $(".rounded").attr("src", $(this).children().siblings().attr("src"));
      $(".Mtitle").text($(this).children(".card-body").children().siblings("h2").text());
      $(".Mdirector").text($(this).children(".card-body").children(".d-flex").find("p:nth(0)").text());
      $(".Mwriter").text($(this).children(".card-body").children(".d-flex").find("p:nth(1)").text());
      $(".Mstars").text($(this).children(".card-body").children(".d-flex").find("p:nth(2)").text());

    });
    $(window).resize(function () {
      if ($(window).width() < 600) {
        $(".modal-content").css("transform", "scaleX(1)");
      }
      else {
        $(".modal-content").css("transform", "scaleX(1.4)");
      }
    });
  });
