import React from "react";
export default function Carddecks (){ 
    return (
      <div className="carddecks">
      <Card
        img="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"
        title="4005.00$"
        description="WORLD WEAR FOOTWEAR Men Red-1243 Sports Shoes, Running Shoes for Men,Cricket Shoes,Casual Shoes,Trekking Shoes,Comfortable for Men's"
      />

      <Card
        img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Iw2HkKFmL._UY695_.jpg"
        title="5872.50$"
        description="D-SNEAKERZ Shoes for Boys Men Casual Sneakers Stylish New Model Latest Collection Red Color Gents Shoe."
      />

      <Card
        img="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg"
        title="1287.00$"
        description="A pair of round-toe white sneakers, has regular styling, lace-up detail, Canvas upper, Cushioned footbed, Textured and patterned outsole Warranty: 3 months Warranty provided by brand/manufacturer"/>

      <Card
        img="https://images.squarespace-cdn.com/content/v1/61dcd32b3fb8bb4b5af9b560/1668707748473-KDWCBG5HOQ1XVF5E179L/Allbirds%2BShoes.png"
        title="555.05$"
        description="produce fairly made shoes that range in function, style, and price. From hiking and running to work or a night out on the town, these shoe brands make it easier to fill your closet with high-quality footwear for every occasion"
      />

      <Card
        img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Iw2HkKFmL._UY695_.jpg"
        title="5872.50$"
        description="D-SNEAKERZ Shoes for Boys Men Casual Sneakers Stylish New Model Latest Collection Red Color Gents Shoe."
      />

      <Card
        img="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg"
        title="1287.00$"
        description="A pair of round-toe white sneakers, has regular styling, lace-up detail, Canvas upper, Cushioned footbed, Textured and patterned outsole Warranty: 3 months Warranty provided by brand/manufacturer"/>

    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Add to Cart</button>
    </div>
    )
}