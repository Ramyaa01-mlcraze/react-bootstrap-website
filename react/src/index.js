import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

const DESTINATIONS = [
  {
    title: "Kerala",
    distance: "603 KM",
    travelTime: "10 hours 18 minutes",
    cryoSleep: "none",
    transport: [
      "Train",
      "Flight"
    ],
    arrivalSites: [
      "Palakkad",
      "Thrissur",
      "Kozhikode"
    ],
    header: "Visit the God's Own Country",
    blurb:
      "If you’re looking for a Southern getaway in India then Kerala is the perfect choice of destination to plan your escape to and you have landed at the right place to make this tropical vacation happen! Famously known as the ‘God’s Own Country’, Kerala is the picturesque beauty that is located in the tropical Malabar Coast of India and here we give you a wide selection of Kerala Blogs, expertly weitten to cater to all your travel needs. You can go as far as you can with your imagination and find the best of options to make your Kerala trip come true with a lifetime of memories and adventures to look forward to. The backwaters of Kerala are a perfect place to unwind in the midst of swaying palm trees and spice plantations. Soak in the aroma of coffee and go on an evening stroll exploring the tropical landscape of Kerala.",
    siteMap:
      "https://www.google.com/maps/place/Kerala/@10.5327238,73.8837553,7z/data=!3m1!4b1!4m9!1m2!2m1!1skerala+site+map!3m5!1s0x3b0812ffd49cf55b:0x64bd90fbed387c99!8m2!3d10.8505159!4d76.2710833!15sCg9rZXJhbGEgc2l0ZSBtYXCSAQhpbl9zdGF0ZQ",
    poster:
      "https://static2.bigstockphoto.com/3/1/3/large2/313537024.jpg"
  },
  {
    title: "Rajasthan",
    distance: "1036 Miles",
    travelTime: "41 Hours",
    cryoSleep: "optional",
    transport: [
      "Train",
      "Flight"
    ],
    arrivalSites: [
      "Jaipur",
      "Rajasthan",
      "Udaipur",
      "Jaisalmer"
    ],
    header: "Visit the Pink City",
    blurb:
      "Want to spend a royal vacation in the ‘Land of Maharajas’? These Rajasthan travel blogs will give you a sneak peek in the colorful world of the royal state. Get your hands on information like the most recommended places to visit, best time to visit, and exquisite shopping destinations in these Rajasthan blogs. While Jaipur, Udiapur, Jaisalmer and Pushkar are some of the most trending cities in the ‘Maharajaland’, these places are just the tip of the iceberg of the experiences Rajasthan has in store for you. There is so much more to Rajasthan than just palaces and forts.",
    siteMap:
      "https://www.google.com/maps/place/Rajasthan/@26.5600949,69.3792954,6z/data=!3m1!4b1!4m5!3m4!1s0x396a3efaf7e30e37:0xb52b9b4506c088e5!8m2!3d27.0238036!4d74.2179326",
    poster:
      "https://pbs.twimg.com/media/Ev4YnUyVgAYDZrW.jpg"
  },
  
];

ReactDOM.render(
  <App destinations={DESTINATIONS} />,
  document.getElementById("root")
);
