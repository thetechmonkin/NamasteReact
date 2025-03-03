import React, { useState } from "react";
import { restaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";

const getFilteredRestaurants = (searchText, restaurants) => {
  const filteredData = restaurants.filter(res => {
    return res.data.name.includes(searchText);
  })
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => {
          const data = getFilteredRestaurants(searchText, restaurants);
          setFilteredRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
