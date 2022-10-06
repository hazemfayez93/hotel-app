import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCheckout } from "../../features/checkout/checkoutSlice";
import Room from "../room/Room";
import "./Rooms.scss";

const Rooms = ({ roomsDisplay }) => {
  const dispatch = useDispatch();
  const handleCheckout = (i) => {
    let roomsCopy = [...roomsDisplay];
    roomsCopy = [roomsCopy[i]];
    dispatch(addToCheckout(roomsCopy));
  };
  return (
    <div className="rooms">
      {roomsDisplay.map((room, i) => (
        <Room
          key={room.id}
          room={room}
          i={i}
          button={
            <Link
              to="/checkout"
              className="room-checkout-button"
              onClick={() => handleCheckout(i)}
            >
              <span className="room-checkout-button-text">Select Room</span>
            </Link>
          }
        />
      ))}
    </div>
  );
};

export default Rooms;
