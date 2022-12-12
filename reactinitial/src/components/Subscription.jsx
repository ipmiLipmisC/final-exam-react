import { useState } from "react";
import LoadingMask from "./LoadingMask";
import { Button, TextField } from "@mui/material"


const Subscription = () => {


const [isLoading, setIsLoading] = useState(false);
const [subscribedText, setSubscribedText] = useState("Subscribe!");
const [email, setEmail] = useState("");



async function handleSubmit(e) {
  e.preventDefault();
  setIsLoading(true);
  const response = await fetch("https://demoapi.com/api/series/newsletter", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(email),
  });
  await response.json();

  if (email.includes('@') && email.includes('.')) {
    setSubscribedText("Subscribed");
  } 

  setIsLoading(false);

}


  return (
    <div>
      <h1>Subscribe to our newsletter!</h1>
      <form>
      <TextField  variant="filled" type="text" placeholder="Subscribe"/>
      <Button variant="contained">{subscribedText}</Button>
      </form>
    </div>
  );
};

export default Subscription