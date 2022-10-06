import "./Filters.scss";

const Filters = ({
  handleSelect,
  handleCheckbox,
  filters,
  priceSort,
  handlePriceSort,
  handleReset,
}) => {
  return (
    <div className="filters">
      <div className="filter-element">
        <label className="filter-label" htmlFor="bedType">
          Room Type
        </label>
        <select
          className="filter-input"
          id="bedType"
          name="bedType"
          value={filters.bedType}
          onChange={(e) => handleSelect(e)}
        >
          <option value="">Select Type</option>
          <option value="king">King</option>
          <option value="queen">Queen</option>
        </select>
      </div>
      <div className="filter-element">
        <label className="filter-label" htmlFor="persons">
          Persons (Maximum)
        </label>
        <select
          className="filter-input"
          id="persons"
          name="persons"
          value={filters.persons}
          onChange={(e) => handleSelect(e)}
        >
          <option value="">Select Persons</option>
          <option value="2">2</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="filter-element">
        <label className="filter-label" htmlFor="priceSort">
          Price Sort
        </label>
        <select
          className="filter-input"
          id="priceSort"
          name="priceSort"
          value={priceSort}
          onChange={(e) => handlePriceSort(e)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="filter-element">
        <label className="filter-checkbox-container" htmlFor="wifi">
          <input
            className="filter-checkbox-input"
            id="wifi"
            name="wifi"
            type="checkbox"
            checked={filters.wifi}
            onChange={(e) => handleCheckbox(e)}
          />
          <span className="filter-checkbox-text">Wifi</span>
        </label>
      </div>
      <div className="filter-element">
        <label className="filter-checkbox-container" htmlFor="breakfast">
          <input
            className="filter-checkbox-input"
            id="breakfast"
            name="breakfast"
            type="checkbox"
            checked={filters.breakfast}
            onChange={(e) => handleCheckbox(e)}
          />
          <span className="filter-checkbox-text">Breakfast</span>
        </label>
      </div>
      <div className="filter-element">
        <input
          type="reset"
          value="Reset"
          className="filter-reset"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default Filters;
