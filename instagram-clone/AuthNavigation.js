import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./Firebase";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(
    () => onAuthStateChanged(getAuth(firebaseApp), (user) => userHandler(user)),
    []
  );
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
