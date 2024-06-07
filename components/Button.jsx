export function Button(props) {
  return (
    <>
      <div>
        <a>{props.title}</a>
      </div>
      <style jsx>{`
        a {
          background-color: white;
          border-radius: 8px;
          color: black;
          cursor: pointer;
          display: inline-block;
          font-family: Inter, sans-serif;
          font-size: 18px;
          font-weight: 600;
          margin: ${props.buttonMargin};
          padding: 18px 26px 18px 26px;
          text-transform: uppercase;
          transition: all 0.15s ease-in-out;
        }
        a:hover {
          filter: brightness(80%);
          transform: translateY(4px);
        }
      `}</style>
    </>
  );
}
