import "./App.css";
import React, { useState } from "react";
export default function App() {
  const students = [
    {
      title: "Aayirathil Oruvan",
      imdb: "7.2/10",
      picture: "https://upload.wikimedia.org/wikipedia/en/e/ed/Aayirathil_Oruvan_1965_poster.jpg",
      plot: "A doctor gets captured as a slave for treating the rebels who are fighting against the king. However, in a turn of events, he saves the life of a pirate, who agrees to help him liberate the slaves."
    },
    {
      title: "Vasantha Maaligai",
      imdb: "6.8/10",
      picture: "https://m.media-amazon.com/images/M/MV5BNzg2NDRhODAtYWNjNi00YmVlLTg2YjQtZmE3ZjU5NjQ3NDI0XkEyXkFqcGdeQXVyMjM3NjAwODc@._V1_.jpg",
      plot: "A woman must overcome a wealthy alcoholic's wicked family as she tries to help him turn his life around."
    },
    {
      title: "Thiruvilaiyadal (திருவிளையாடல்)",
      imdb: "7.8/10",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFE4_xDDe6gnsX0UczfGb0WQ_L-i0eMdKNOupw2kDViB4qV70",
      plot: "When Muruga loses a competition against his brother for a sacred mango, he leaves in anger. His mother, Parvati, tries to calm him down by narrating four of Lord Shiva's greatest divine tasks."
    },
    {
      title: "Aalayamani",
      imdb: "7.4/10",
      picture: "https://m.media-amazon.com/images/M/MV5BZDhiN2E5NWQtZjgwZC00ZThmLThjNDAtYzg3ZGU1NmZiZTUyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
      plot: "Thyagarajan, a lonely young man, develops a friendship with a virtuous man, Sekhar. Things take a drastic turn when Thyagarajan falls in love with Sekhar's lover, Meena."
    },
    {
      title: "Ulagam Sutrum Valiban (உலகம் சுற்றும் வாலிபன்)",
      imdb: "8.9/10",
      picture: "https://images-na.ssl-images-amazon.com/images/I/818CbL9K3dL._RI_.jpg",
      plot: "Scientist Murugan has a formula that can harness energy from lightening. A rival wants it for his evil plans. When Murugan disappears, his brother goes around the world to find him and save the world."
    }
  ];
  function Starting({ movieName, posterURL, rating, summary }) {
    const styles= {color :rating>= "8.5/10" ?"teal" :"crimson"};
    const[like, setlike]=useState(1000)
    const [dislike, setDislike]=useState(0)
    const [toggle, setToggle]=useState({summaryVisible})
      
    return (
      <div className="list">
          <img src={posterURL} className="poster" alt="avatar" />
          <div className="container">
         <h2>{movieName}</h2> 
          <p style={styles}>{rating}</p>
          <button onClick={()=> setlike(like+1)}>
            like  {like}
          </button>
          <button onClick={()=> setDislike(dislike+1)}>
            Dislike  {dislike}
          </button>
          <br />
          <button onClick={toggleBtn}>toggle</button>
          <p style={summaryVisible, summaryHidden}>{summary}</p>
          </div>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>VINTAGE COLLECTION</h1>
      {students.map(({ title, imdb, picture, plot }) => (
        <Starting movieName={title} posterURL={picture} rating={imdb} summary={plot} key={imdb} />
      ))}
    </div>
  );
}