import React from "react";

function MusicListContainer(props) {
  return (
    <div className="musiclist-container">
      {props.data.map((item) => (
        <div
          className={
            "song-list " + (props.currentPlaying == item.id ? "active" : "")
          }
          onClick={() => props.handleCurrentPlaying(item.id)}
        >
          <div className="song-avatar">
            <img src={item.image} />
          </div>
          <div className="text-wrapper">
            <div className="song-title">{item.name}</div>
            <div className="artist">{item.artist}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicListContainer;
