export function Title(props) {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
      </div>
      <style jsx>{`
        h2 {
          color: black;
          font-size: 24px;
          font-weight: 700;
          line-height: 29;
        }
      `}</style>
    </>
  );
}
