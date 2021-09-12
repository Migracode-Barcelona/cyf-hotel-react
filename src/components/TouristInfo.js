import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.imgLink} className="card-img-top" />
      <div className="card-body">
        <h5 class="card-title">{props.cityName}</h5>
        <p class="card-text">{props.cityDiscription}</p>
        <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const TouristInformationsCards = () => {
  return (
    <div className="infoArea">
      <TouristInfoCard
        cityName="Glasgow"
        imgLink="https://www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg"
        cityDiscription="Glasgow is Scotland's largest city and is renowned for its culture, style and the friendliness of its people.

        Glasgow offers a blend of internationally-acclaimed museums and galleries, stunning architecture, vibrant nightlife, fantastic shopping and a diverse array of restaurants and bars."
        url="http://peoplemakeglasgow.com"
      />
      <TouristInfoCard
        cityName="Manchester"
        imgLink="https://img.bekiaviajes.com/articulos/portada/74000/74570-h.jpg"
        cityDiscription="Manchester city centre is jam-packed with unique and eclectic restaurants, bars, shops, museums, galleries, 
        hotels and places to stay whilst the surrounding Greater Manchester boroughs offer a patch-work of visitor experiences including quaint market towns, traditional pubs and beautiful green spaces and waterways."
        url="http://visitmanchester.com"
      />
      <TouristInfoCard
        cityName="London"
        imgLink="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
        cityDiscription="With an 800-year history, the City of London mixes Roman ruins with modern icons. The area is home to some of 
        London’s most popular attractions, including Tower Bridge, St Paul’s Cathedral and the Museum of London. as well as iconic modern buildings such as, The Gherkin and, The Cheesegrater."
        url="http://visitlondon.com"
      />
    </div>
  );
};
export default TouristInformationsCards;
