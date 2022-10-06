import React from "react";
import { ReactComponent as BedIcon } from "../../assets/icons/bed-solid.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/user-solid.svg";
import { ReactComponent as WifiIcon } from "../../assets/icons/wifi-solid.svg";
import { ReactComponent as BreakfastIcon } from "../../assets/icons/mug-saucer-solid.svg";
import "./Room.scss";

const Room = ({ room, button }) => {
  const {
    name,
    price,
    image,
    persons,
    bedType,
    bedNumber,
    wifi,
    breakfast,
    description,
  } = room;
  return (
    <div className="room-element">
      <div className="room-image-container">
        <img className="room-image" src={image} alt="Mt Si Summit" />
      </div>
      <div className="room-info">
        <div className="room-heading">
          <div className="room-title">
            <span className="room-title-text">{name}</span>
          </div>
          <div className="room-price">
            <span className="room-price-text">${price}</span>
          </div>
        </div>
        <ul className="room-details">
          <li>
            <BedIcon className="leaf" />
            <span>
              {bedNumber} {bedType.charAt(0).toUpperCase() + bedType.slice(1)}{" "}
              {`${bedNumber > 1 ? "Beds" : "Bed"}`}
            </span>
          </li>
          <li>
            <PersonIcon className="leaf" />
            <span>{persons} Persons</span>
          </li>
          {wifi && (
            <li>
              <WifiIcon className="leaf" />
              <span>Wifi</span>
            </li>
          )}
          {breakfast && (
            <li>
              <BreakfastIcon className="leaf" />
              <span>Breakfast</span>
            </li>
          )}
        </ul>
        <div className="room-description">
          <p>{description}</p>
        </div>
        {button}
      </div>
    </div>
  );
};

export default Room;
