import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const UiCardStock = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        getCard();
    }, []);

    const getCard = () => {
        let config = {
            headers: {
                'Authorization': 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
            }
        }
        let URL = 'http://localhost:3000/snacks';
        axios.get(
            URL,
            config
        ).then(res => {
            setCard(res.data);
        }).catch(console.log);
    }

    return (
        <div className='wrapper'>
            {
                card && card.map(item =>
                    <div className='card' key={item.id}>
                        <div className='banner-img-card'>
                            <span className='id'>
                                {item.inStock}
                            </span>
                            <img src={item.image} />
                        </div>
                        <div className='discription'>
                            <p>{item.product}</p>
                            <span>{item.brand}</span>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default UiCardStock