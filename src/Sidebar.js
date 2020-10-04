import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";
import SidebarOptions from "./SidebarOptions";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Library" />
      <br />

      <strong className="sidebar__title">PLAYLISTS</strong>
      
      <div className="sidebar__playlist">
        <AddBoxRoundedIcon className="big__icon"/>
        <h3>Created playlist</h3>
      </div>
      <div className="sidebar__playlist">
      <FavoriteBorderIcon className="big__icon"/>
        <h3>Liked Songs</h3>
      </div>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
