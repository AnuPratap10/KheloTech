import React from "react";
import HomePage from "./HomePage";
import {LatestNews} from "./LatestNews";

import {MascotPage} from "./MascotPage";
import {SportsPages} from "./SportsPages";
import {FollowUsPages} from "./FollowUsPages";
import {Competition} from "./Competition";
import {Footer} from "./Footer";
import {ChakraProvider} from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <>
      <div style={{backgroundColor: "rgb(246, 241, 241)"}}>
        <HomePage />

        <LatestNews />

        <MascotPage />
        <SportsPages />
        <FollowUsPages />
        <Competition />
    
          <Footer />
      
      </div>
    </>
  );
};
