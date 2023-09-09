import { useState } from "react";
import "./App.css";
import ListMovies from "./Components/ListMovies";
import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import { Button } from "bootstrap";
import Search from "./Components/Search";
import Rate from "./Components/Rate";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import MovieDetails from "./Components/MovieDetails";

function App() {
  //******This is the Api *******/
  const [Movies, setMovies] = useState([
    {
      _id: "5fedeef47c0ffe00176db1ca",
      title: "A contre Sens",
      rate: 4,
      date: "2023",
      imgUrl:
        "https://media.senscritique.com/media/000021375837/300/a_contre_sens.jpg",
      description:
        "Noah doit quitter sa ville, son petit ami et ses amis pour emménager dans le manoir de William Leister, le nouveau et riche mari de sa mère. Âgée de dix-sept ans, fière et indépendante, Noah rencontre Nick, son nouveau demi-frère, et leurs fortes personnalités s’entrechoquent dès le début.",
      category: "Drame",
      __v: 0,
    },
    {
      _id: "5fedefe47c0ffe00176db1cb",
      title: "Fight Club",
      rate: 5,
      date: "1999",
      imgUrl:
        "https://media.senscritique.com/media/000012359351/300/fight_club.jpg",
      description:
        "Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la vacuité de son existence, son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être. Lors d'un voyage d'affaires, il fait la connaissance de Tyler Durden, une sorte de gourou anarchiste et philosophe. ",
      category: "Drame / Action",
      __v: 0,
    },
    {
      _id: "5fedf02d7c0ffe00176db1cc",
      title: "Inception",
      rate: 4,
      date: "2010",
      imgUrl:
        "https://media.senscritique.com/media/000004710747/300/inception.jpg",
      description:
        "Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction : spécialité qui consiste à voler les secrets les plus intimes enfouis au plus profond du subconscient durant une phase de rêve",
      category: "Action | Thriller",
      __v: 0,
    },
    {
      _id: "5fedf0647c0ffe00176db1cd",
      title: "Avatar",
      rate: 5,
      date: "2009",
      imgUrl:
        "https://media.senscritique.com/media/000019629031/300/avatar.jpg",
      description:
        "Jake Sully, ancien marine immobilisé dans un fauteuil roulant, est envoyé en mission sur la planète Pandora. Là, il doit participer à un programme d'étude du peuple autochtone, les Na'vi. L'atmosphère de Pandora étant toxique, son esprit est projeté dans un hybride biologique commandé à distance: un avatar. ",
      category: "Action | Adventure",
      __v: 0,
    },
    {
      _id: "5fedf0947c0ffe00176db1ce",
      title: "Forest Gump",
      rate: 3,
      date: "1994",
      imgUrl:
        "https://media.senscritique.com/media/000020846881/300/forrest_gump.jpg",
      description:
        "A Savannah, dans l'Etat de Géorgie, Forrest Gump, assis sur un banc public, livre à qui veut l'entendre, l'étrange récit de sa vie mouvementée. Il naît dans un bourg de l'Alabama, affecté d'un quotient intellectuel inférieur à la moyenne et d'une paralysie partielle des jambes.",
      category: "Romance | Drama",
      __v: 0,
    },
    {
      _id: "5fedf0cf7c0ffe00176db1cf",
      title: "Django",
      rate: 5,
      date: "2013",
      imgUrl:
        "https://media.senscritique.com/media/000013924487/300/django_unchained.jpg",
      description:
        "Un esclave noir est affranchi par un chasseur de primes. Le moment est venu de sauver son épouse d'un riche propriétaire de plantation du Mississipi.",
      category: "Action",
      __v: 0,
    },
    {
      _id: "5fedf1067c0ffe00176db1d0",
      title: "Shutter Island",
      rate: 5,
      date: "2010",
      imgUrl:
        "https://media.senscritique.com/media/000007087624/300/shutter_island.jpg",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      category: "Thriller",
      __v: 0,
    },
  ]);
  //******** Show and Hide Function  *********/
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  //******** Search States*********/
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);

  //******** Add Movie  Function  *********/
  const AddToMovie = (Movie) => {
    setMovies([...Movies, Movie]);
  };

  return (
    <>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route
            path="/movieList"
            element={
              <ListMovies
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
            }
          />
          <Route path="/dashbord"
          element={
            <Dashboard/>
          }
          />
          <Route path="/addMovie" element={<AddMovie AddToMovie={AddToMovie}/>}/>
          <Route path="/search" element={<Search Movies={Movies} searchName={searchName}
                searchRate={searchRate} setSearchName={setSearchName} setSearchRate={setSearchRate} />} />
          <Route path="/movieDetails/:id" element ={<MovieDetails Movies={Movies}   />}/>
          
        </Routes>

        
      </div>
    </>
  );
}

export default App;
