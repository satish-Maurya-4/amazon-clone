import React from 'react'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <img className="home__banner--image" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg" alt=" home banner image" />
            <div className="home__row">
            <Product 
                id="1268546"
                title="AS-IT-IS Nutrition Whey Protein Concentrate 80% Unflavoured, tested for purity (1kg)"
                price={2799}
                rating={4}
                image="https://m.media-amazon.com/images/I/514DjbvLP5L._SL1000_.jpg"
            />

            <Product 
                id="1264346"
                title="Brand Conquer Robot Races Car Toys Friction Family Toy Racing Car"
                price={599}
                rating={5}
                image="https://m.media-amazon.com/images/I/51v3drnVBuL.jpg"
            />
            </div>

            <div className="home__row">
            <Product 
                id="1268546"
                title="OPPO Smart Band with Extra Sport Strap"
                price={2799}
                rating={4}
                image="https://m.media-amazon.com/images/I/41uKPAOBrJL._SL1120_.jpg"
            />
            
            <Product 
                id="1264546"
                title="MBTC Clark Seat and Back Cushion Folding Chair"
                price={1345}
                rating={3}
                image="https://m.media-amazon.com/images/I/71-eajUadPL._SL1500_.jpg"
            />

            <Product 
                id="1268766"
                title="
                Prestige PCJ 7.0 500-Watt Centrifugal Juicer"
                price={3790}
                rating={5}
                image="https://m.media-amazon.com/images/I/91oCwy3CkdL._SL1500_.jpg"
            />
            
            </div>

            <div className="home__row">
            <Product 
                id="1269846"
                title="AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
                price={28799}
                rating={3}
                image="https://m.media-amazon.com/images/I/71x7c8N9ShL._SL1240_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
