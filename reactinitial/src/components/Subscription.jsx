import { useState } from "react";
import LoadingMask from "./LoadingMask";


const Subscription = () => {


const [isLoading, setIsLoading] = useState(false);
const [subscribed, setSubscribed] = useState(false);
const [subscribedText, setSubscribedText] = useState("subscribed");
const [email, setEmail] = useState("");
const [isValidEmail, setIsValidEmail] = useState(false);





  return (
    <div>
      <h1>Subscribe to our newsletter!</h1>
      <form>
      <input></input>
      <button></button>
      </form>
    </div>
  );
};
