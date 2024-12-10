import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';


import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.jpg';
import img4 from './imgs/img4.jpg';
import img5 from './imgs/img5.jpg';
import img6 from './imgs/img6.jpg';

const App = () => {
    const listings = [
        { image: img1, title: '(W) Jordan 1 Low Black and White', description: '(W) 조던 1 로우 블랙 앤 화이트', price: '₩649,000'},
        { image: img2, title: '(W) Jordan 1 x Travis Scott Retro Low OG SP Medium Olive', description: '(W) 조던 1 x 트래비스 스캇 레트로 로우 OG SP 미디움 올리브', price: '₩169,000'},
        { image: img3, title: 'Nike Romaleos 4 Black White', description: '나이키 로말레오 4 블랙 화이트', price: '₩197,000',},
        { image: img4, title: 'Nike Mercurial Vapor 16 Pro TF Glacier Blue Blue Orbit', description: '나이키 머큐리얼 베이퍼 16 프로 TF 글레이셔 블루 블루 오빗', price: '₩87,000',},
        { image: img5, title: 'Nike x Tom Sachs General Purpose Shoe Archive', description: '나이키 x 톰 삭스 제너럴 퍼포즈 슈 아카이브', price: '₩155,000',},
        { image: img6, title: '(W) Jordan 1 x Travis Scott Retro Low OG SP Canary', description: '(W) 조던 1 x 트래비스 스캇 레트로 로우 OG SP 카나리', price: '₩500,000',}
    ];

    return (
        <div>
            <Navbar/>
            <Hero/>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridGap: '1.5rem',
                    padding: '2rem',
                }}
            >
                {listings.map((listing, index) => (
                    <Card
                        key={index}
                        image={listing.image}
                        title={listing.title}
                        description={listing.description}
                        price={listing.price} // 가격 데이터 전달
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default App;
