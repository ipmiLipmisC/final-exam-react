import { useState } from "react";
import { Button } from "@mui/material";

const Character = ({ person }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <article>
      <p>{person.name}</p>
      <Button variant="contained" onClick={() => setIsShown(!isShown)}>
        {isShown ? "Show less" : "Show more"}
      </Button>
      {isShown && (
        <div className="details">
          <p>{person.details}</p>
        </div>
      )}
    </article>
  );
};

export default Character;
