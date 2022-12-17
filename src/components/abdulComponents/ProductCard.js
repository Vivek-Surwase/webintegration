const ProductCard = () => {
    return (  
        <div className="productMenu">
            <Card 
                img="https://rukminim1.flixcart.com/image/612/612/ktuewsw0/mouse/d/w/w/m7030-flipkart-smartbuy-original-imag73qqzzrf2kmu.jpeg?q=70" 
                name="Flipkart SmartBuy M7030 Wireless Optical Mouse" 
                description="2.4GHz Wireless, Bluetooth, Black and Grey" 
                rating="4.1"
                reviews="(1,614)" 
                price="Rs. 499" 
            />
            <Card 
                img="https://rukminim1.flixcart.com/image/612/612/krme93k0/mouse/c/p/e/v8-flipkart-smartbuy-original-imag5d8qha2mwrex.jpeg?q=70" 
                name="Flipkart SmartBuy V8 Wireless Optical Mouse" 
                description="2.4GHz Wireless, Grey" 
                rating="4.5" 
                reviews="(8,143)" 
                price="Rs. 479" 
            />
            <Card 
                img="https://rukminim1.flixcart.com/image/612/612/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70" 
                name="Logitech B175 / Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse" 
                description="2.4GHz Wireless, Black" 
                rating="4.5" 
                reviews="(145909)" 
                price="Rs. 699" 
            />
            <Card 
                img="https://rukminim1.flixcart.com/image/612/612/kcxpbww0/mouse/g/b/c/hp-3fv67aa-original-imaftyjzaphenhkx.jpeg?q=70" 
                name="HP 250 Wireless Optical Mouse" 
                description="2.4GHz Wireless, Black" 
                rating="4.5" 
                reviews="(21,298)" 
                price="Rs. 499" 
            />
        </div>
    );
}

function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card_img" alt="Product-Card" />
            <div className="cardBody">
                <h2 className="productName">{props.name}</h2>
                <p className="productDesc">{props.description}</p>
                <p className="rating">{props.rating} {props.reviews}</p>
                <h3 className="productPrice">{props.price}</h3>
            </div>
        </div>
    );
}
export default ProductCard;