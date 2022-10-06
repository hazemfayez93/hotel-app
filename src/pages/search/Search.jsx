import { useEffect, useState } from "react";
import Filters from "../../components/filters/Filters";
import Rooms from "../../components/rooms/Rooms";
import { roomsData } from "../../data/roomsData";
import "./Search.scss";

const Search = () => {
  const filterData = {
    bedType: "",
    persons: "",
    wifi: false,
    breakfast: false,
  };

  const [rooms, setRooms] = useState(roomsData);
  const [roomsDisplay, setRoomsDisplay] = useState(roomsData);
  const [filters, setFilters] = useState(filterData);
  const [priceSort, setPriceSort] = useState("ascending");

  const handleSort = (priceSort, filteredRooms) => {
    switch (priceSort) {
      case "ascending":
        filteredRooms.sort((a, b) => a.price - b.price);
        setRoomsDisplay(filteredRooms);
        break;
      case "descending":
        filteredRooms.sort((a, b) => b.price - a.price);
        setRoomsDisplay(filteredRooms);
        break;

      default:
        setRoomsDisplay(filteredRooms);
    }
  };

  useEffect(() => {
    const trueFilters = {};

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        trueFilters[key] = filters[key];
      }
    });
    let filteredRooms = [...rooms];
    filteredRooms = rooms.filter((room) => {
      return Object.keys(trueFilters).every((property) => {
        return trueFilters[property] === room[property];
      });
    });
    handleSort(priceSort, filteredRooms);
  }, [filters, rooms, priceSort]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  const handlePriceSort = (e) => {
    const { value } = e.target;
    setPriceSort(value);
  };

  const handleReset = () => {
    setFilters(filterData);
    setRoomsDisplay(roomsData);
    setPriceSort("ascending");
  };

  return (
    <main className="search">
      <Filters
        filters={filters}
        priceSort={priceSort}
        handleSelect={handleSelect}
        handleCheckbox={handleCheckbox}
        handlePriceSort={handlePriceSort}
        handleReset={handleReset}
      />
      <Rooms roomsDisplay={roomsDisplay} />
    </main>
  );
};

export default Search;
