import { Title } from "../components/Title";

export function Grid({ idx, image, name, artist, gridTemplateArea }) {
  return (
    <>
      <div className="image">
        <img src={image} className="picture" alt="profile picture" />

        <h3 key={idx}>{name}</h3>
        <h3>{artist}</h3>
      </div>

      <style jsx>{`
        .image {
          grid-area: ${gridTemplateArea};
        }
        .picture {
          height: 100%;
          width: 100%;
          display: block;
          object-fit: cover;
        }
        h3 {
          color: black;
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
}
