import { useState } from "react";

const Character = ({ person }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <article>
      <p>{person.name}</p>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Show less" : "Show more"}
      </button>
      {isShown && (
        <div className="details">
          <p>{person.details}</p>
        </div>
      )}
    </article>
  );
};

export default Character;
