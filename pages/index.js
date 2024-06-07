import { useEffect, useState, useRef } from "react";

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

import { sliderData } from "../components//slider-data.jsx";
import { Slider } from "../components/Slider";
import { Header } from "../components/Header";

const itemData = [
  {
    img: "../assets/thumbnails/thumbnail0.jpg",
    name: "Starry Night",
    artist: "Vincent Van Gogh",
  },
  {
    img: "../assets/thumbnails/thumbnail1.jpg",
    name: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
  },
  {
    img: "../assets/thumbnails/thumbnail2.jpg",
    name: "Guernica",
    artist: "Pablo Picasso",
  },
  {
    img: "../assets/thumbnails/thumbnail3.jpg",
    name: "Penitent Magdalene",
    artist: "Artemisia Gentileschi",
  },
  {
    img: "../assets/thumbnails/thumbnail4.jpg",
    name: "The Storm on the Sea of Galilee",
    artist: "Rembrandt",
  },
  {
    img: "../assets/thumbnails/thumbnail7.jpg",
    name: "The Sleeping Gypsy",
    artist: "Henri Rousseau",
  },

  {
    img: "../assets/thumbnails/thumbnail6.jpg",
    name: "Van Gogh self-portrait",
    artist: "Vincent Van Gogh",
  },
  {
    img: "../assets/thumbnails/thumbnail5.jpg",
    name: "The Great Wave off Kanagawa",
    artist: "Hokusai",
  },
  {
    img: "../assets/thumbnails/thumbnail10.jpg",
    name: "The Basket of Apples",
    artist: "Paul Cézanne",
  },

  {
    img: "../assets/thumbnails/thumbnail9.jpg",
    name: "The Night Café",
    artist: "Vincent Van Gogh",
  },
  {
    img: "../assets/thumbnails/thumbnail12.jpg",
    name: "Arnolfini Portrait",
    artist: "Jan van Eyck",
  },
  {
    img: "../assets/thumbnails/thumbnail13.jpg",
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
  },
  {
    img: "../assets/thumbnails/thumbnail11.jpg",
    name: "The Boy in the Red Vest",
    artist: "Paul Cézanne",
  },

  {
    img: "../assets/thumbnails/thumbnail14.jpg",
    name: "The Swing",
    artist: "Jean-Honoré Fragonard",
  },
];

export default function Home({}) {
  return (
    <>
      <div className="navbar">
        <img src="../assets/shared/logo.svg" alt="galleria" />
        <a
          href="/slide"
          target="_blank"
          rel="noopener
          noreferrer"
        >
          START SLIDESHOW
        </a>
      </div>
      <Box
        sx={{ width: 1360, minHeight: 820, mx: "auto", mt: "2rem", mb: "2rem" }}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
          {itemData.map((item, index) => (
            <div style={{ position: "relative" }} key={index}>
              <img
                src={`${item.img}?w=310 &auto=format`}
                alt={item.name}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                }}
              />
              <div
                className="details-box"
                key={index}
                style={{
                  width: "230px ",
                  height: "83px",
                  position: "absolute",
                  bottom: "10%",
                  left: "10%",
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginBottom: "5px",
                  }}
                >
                  {item.name}
                </h4>{" "}
                <h2
                  style={{
                    fontSize: "12px",
                    fontWeight: "regular",
                    color: "#ffffff",
                    marginBottom: "5px",
                  }}
                >
                  {item.artist}
                </h2>
              </div>
            </div>
          ))}
        </Masonry>
      </Box>

      <style jsx>{`
        a {
          color: #7d7d7d;
          font-size: 12px;
          font-weight: 700;
          line-height: 19px;
          text-decoration: none;
        }
        a:hover {
          color: #000000;
          cursor: pointer;
        }
        .navbar {
          align-items: center;
          display: flex;
          height: 35vh;
          justify-content: space-between;
          width: 85vw;
          margin: 3em 3em 3em 3em;
        }

        .card-details {
          width: 250px;
          position: absolute;
          top: 70%;
          left: 5rem;
        }
        h4 {
          font-size: 24px;
          font-weight: bold;
          color: red;
        }
        h2 {
          font-size: 12px;
          font-weight: regular;
          color: blue;
        }

        .pin-container {
          margin: 0;
          padding: 0;
          width: 80vw;
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          display: flex;
          align-items: flex-start;
        }
        .column {
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
        }
        .pin {
          margin: 0;
          display: inline-flex;
          position: relative;
        }
        .pin .img-fluid {
          width: 100%;
        }
      `}</style>
    </>
  );
}

// References

// for masonry
//https://mui.com/material-ui/react-masonry/

//https://officialrajdeepsingh.dev/read-locally-json-file-use-fetch-method-in-react-js.html

//fetch json -https://www.youtube.com/watch?v=D-U0OkP5kwg

//https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/

//slider, autoscroll logic https://www.youtube.com/watch?v=K9bYxUREypk

//https://medium.com/swlh/make-a-pinterest-style-idea-board-with-masonry-layout-tutorial-2f09a84dbf90
/* assign a parent class for columns and use inline-block for cards. so cards are aligned by columns and naturally flow down the page , making best use of space */

//https://codepen.io/bnsddk/pen/dyXaNod

//https://codefrontend.com/reactjs-redirect-to-url/#:~:text=Redirect%20using%20react%2Drouter&text=However%2C%20if%20you%20need%20to,'%2C%20%7B%20replace%3A%20true%20%7D)%3B

//https://aguidehub.com/blog/2023-03-28-how-to-create-progress-bar-in-react-js/?expand_article=1

//progressbar logic - https://www.youtube.com/watch?v=y0gO3A3vyb8

//https://betterprogramming.pub/implementing-image-and-text-slider-with-react-js-and-optimizations-7a16af998548

// referred https://github.com/mbart13/galleria-slideshow
// https://github.com/brianlfarmerllc/Galleria_SlideShow
// when i got stuck with stop and start slideshow button logic

//useContext logic from CalebCurry Video
//https://www.youtube.com/watch?v=5ianRgE5ByU

//Modal Logic - https://www.youtube.com/watch?v=KNEbqO-q1r8

/// https://npm.io/package/react-smart-masonry (for home page)
