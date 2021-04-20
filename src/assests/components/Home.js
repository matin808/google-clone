import React from "react";
import "../styles/Home.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Home() {
  return (
    <div className="home">
      <div className="home__img">
        <img
          className="home_image"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>

        <div className="home_search">
        <SearchIcon className = "home_searchIcon" />
        <input type="text"/>  
        <MicIcon /> 
        </div>


      <div className="home_btns">
        <button className = "home_btn">Google Search</button>
        <button className = "home_btn">I'm Feeling Lucky</button>
      </div>

      <p className = "home_links">
        Google offered in:{"  "}
        <a href="/" className = "home_link">
           हिन्दी  বাংলা  తెలుగు  मराठी  தமிழ்  ગુજરાતી   ಕನ್ನಡ   മലയാളം   ਪੰਜਾਬੀ{" "}
        </a>{" "}
      </p>
    </div>
  );
}

export default Home;
