import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Book = () => {
  const [data, setData] = useState([]);
  const { value, showBook } = useContext(AppContext); 

  useEffect(() => {
    const fetchData = () => {
    

      axios
        .get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "whatever-you-want" },
        })
        .then((response) => {
          setData(response.data.books);
        })
        .catch((error) => {
          console.log(error.message);
          console.log("Status Code : ", error.request.status);
        });
    };
    fetchData();
  });

  const searchvalue = data.filter((elem) =>
    elem.title.toLowerCase().includes(value.toLowerCase())
  );
  const userdata = localStorage.getItem("data");
  console.log(userdata);

  var hoverStyle = {
    padding: "10px",
    transform: "scale(1.03)",
    backgroundColor: "red",
  };

  return (
    <div>
      {!showBook && (
        <div>
          <h1 className="message1">please signup to read books</h1>
          <Link to="/form">
        <button className="register message2">SIGN-UP </button>
      </Link>
        </div>
       
      )}
      
      {searchvalue.length == 0 ? (
        <div>
         
          <h5 className="des">
            {" "}
            Please search again with a valid book title.{" "}
          </h5>
        </div>
      ) : (
        ""
      )}
     <div
         className="book-container"
         style={{
           display: showBook ? 'block' : 'none',
         }}
       >
        {searchvalue.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="book"
              style={{
                hoverStyle,
              }}
            >
              <a
                href={elem.previewLink}
                target="blank"
                style={{
                  cursor: `${showBook ? "pointer" : "none"}`,
                }}
              >
                <img
                  className="bookimg"
                  src={elem.imageLinks.thumbnail}
                  alt="book-img"
                />
              </a>
              <h2 id="title">{elem.title}</h2>
              <p>
                {elem.averageRating} ⭐ <span>Free</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Book;
