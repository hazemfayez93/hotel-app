import Room from "../room/Room";

const CheckoutRooms = ({ checkout }) => {
  return (
    <div className="checkout-rooms">
      {checkout.map((room, i) => (
        <Room key={room.id} room={room} i={i} />
      ))}
    </div>
  );
};

export default CheckoutRooms;
