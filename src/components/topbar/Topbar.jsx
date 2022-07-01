import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Person } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MemeSocial</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="searchbar">
        <Search />
        <input
          placeholder="Search For Mates, Post,Videos"
          className="searchInput"
        />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
