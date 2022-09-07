import React, { useEffect, useState } from "react";
import { useRef } from "react";
import TweetDataService from "../services/tweets";
import "./TweetOptions.css";
export default function TweetOptions(props) {
  const ref = useRef(null);
  const { onClickOutside } = props;
  const id = props.id;
  const retrieve = props.retrieve;
  const deleteTweet = async (id) => {
    console.log(id);
    const res = await TweetDataService.deleteTweet(id);
    console.log("Tweet deleted");
    console.log(res);
    retrieve();
    onClickOutside && onClickOutside();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show) return null;
  return (
    <div className="mobileOptions">
      <div ref={ref} className="container">
        <div className="box">
          <ul className="options">
            <li>Unfollow Computing programming</li>
            {/* <li>Not intrested in this Tweet</li> */}
            <li>Edit tweet</li>
            <li onClick={() => deleteTweet(id)}>Delete tweet</li>
            {/* <li>Report tweet</li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
}
