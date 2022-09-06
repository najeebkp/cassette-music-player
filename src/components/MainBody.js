import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import MusicListContainer from "./MusicListContainer";
import {
  PlayButton,
  PauseButton,
  ReplayButton,
  PrevButton,
  NextButton,
  ShuffleButton,
  Input,
  Overlay,
} from "../styles/styled-components";

function MainBody() {
  const [pause, setPause] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [currentPlaying, setCurrentPlaying] = React.useState(1);
  const musicList = [
    {
      id: 1,
      name: "Sample Music 1",
      artist: "Jamse Weve",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://avatarfiles.alphacoders.com/977/97747.jpg",
    },
    {
      id: 2,
      name: "Beatiful Music Track",
      artist: "Steven Smith",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image:
        "https://papik.pro/en/uploads/posts/2022-06/1655712247_17-papik-pro-p-cool-profile-picture-avatars-17.jpg",
    },
    {
      id: 3,
      name: "No Exit",
      artist: "Jene Walt",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image:
        "https://i.pinimg.com/736x/b0/13/57/b0135774050b803b9f3399b191e8f8a1.jpg",
    },
  ];
  const graphics = React.useRef();
  const song = React.useRef();
  let interval = null;

  const handlePlay = () => {
    pause ? setPause(false) : setPause(true);
    if (pause) {
      song.current.pause();
      graphics.current.pause();
    } else {
      song.current.play();
      graphics.current.play();
    }
  };

  React.useEffect(() => {
    if (pause) {
      interval = setInterval(() => {
        setValue((song.current.currentTime / song.current.duration) * 100);
        if (second < 59) {
          setSecond((second) => second + 1);
        } else {
          setMinute(minute + 1);
          setSecond(0);
        }
        if (song.current.currentTime == song.current.duration) {
          clearInterval(interval);
          handleNextPrev("next");
        }
      }, 1000);
    } else if (!pause && second !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause, second]);

  const handleChange = (level) => {
    setValue(level);
    song.current.currentTime = Math.floor(
      (song.current.duration * level) / 100,
    );
    clearInterval(interval);
    setSecond(Math.floor(song.current.currentTime % 60));
    setMinute(Math.floor((song.current.currentTime % 3600) / 60));
  };

  const secondsToTime = () => {
    if (song && song.current && song.current.duration) {
      const m = Math.floor((song.current.duration % 3600) / 60)
          .toString()
          .padStart(2, "0"),
        s = Math.floor(song.current.duration % 60)
          .toString()
          .padStart(2, "0");

      return m + ":" + s;
    }
  };

  const handleCurrentPlaying = (id) => {
    if (id != currentPlaying) {
      setCurrentPlaying(id);
      clearInterval(interval);
      setSecond(0);
      setMinute(0);
      setValue(0);
      song.current.pause();
      setPause(true);
      setTimeout(() => (song.current.play(), 1000));
    }
  };

  const musicSrc = () => {
    let newArray = musicList.filter((item) => item.id == currentPlaying);
    return newArray[0].url;
  };

  const handleNextPrev = (key) => {
    let newArray;
    if (key == "next") {
      newArray = musicList.filter((item) => item.id == currentPlaying + 1);
    } else {
      newArray = musicList.filter((item) => item.id == currentPlaying - 1);
    }
    if (newArray.length > 0) {
      handleCurrentPlaying(newArray[0].id);
    }
    if (newArray.length == 0) {
      setPause(false);
    }
  };

  return (
    <div>
      <div className="wave-overlay">
        <Player
          ref={graphics}
          loop
          speed={1}
          src="wave.json"
          style={{ height: "300px" }}
        ></Player>
      </div>
      <MusicListContainer
        data={musicList}
        currentPlaying={currentPlaying}
        handleCurrentPlaying={handleCurrentPlaying}
      ></MusicListContainer>

      <audio ref={song} src={musicSrc()}></audio>
      <div className="range-bar">
        <Overlay value={value}></Overlay>
        <Input
          step="any"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="timer left">
        {`${minute < 10 ? "0" + minute : minute}:${
          second < 10 ? "0" + second : second
        }`}
      </div>
      <div className="timer right">{secondsToTime()}</div>
      <div className="footer">
        <div className="control-panel">
          <ReplayButton size="35px" />
          <PrevButton onClick={() => handleNextPrev("prev")} size="45px" />
          <div onClick={handlePlay}>
            {!pause ? <PlayButton size="45px" /> : <PauseButton size="45px" />}
          </div>
          <NextButton onClick={() => handleNextPrev("next")} size="45px" />
          <ShuffleButton size="35px" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
