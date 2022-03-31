import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SnackVoting = () => {

    const [card, setCard] = useState([]);
    const [remainCount, setRemainCount] = useState(3);
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState([]);
    const [selectionCount, setSelectionCount] = useState(0);
    const [date, setDate] = useState(0);

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
            res.data = res.data.map(data => {
                return {
                    ...data,
                    isSelected: false,
                    selectionId: 0
                }
            });
            setCount(res.data.length)
            setCard(res.data);
        }).catch(console.log);
    }

    const vote = (id) => {
        let filter = card.filter(x => x.id === id);
        let index = card.findIndex(x => x.id === id);

        if (filter.length) {
            if (filter[0].isSelected) {
                alert('You voted for this once');
            } else {
                if (selectionCount === 0) {
                    setDate(new Date());
                    addVote(id, index);
                } else {
                    const month = date.getMonth();
                    const nowMonth = new Date().getMonth();
                    if (nowMonth === month) {
                        if (remainCount > 0) {
                            addVote(id, index);
                        } else {
                            alert('you can vote 3 times per month');
                        }
                    } else {
                        setDate(new Date());
                        setRemainCount(3);
                        addVote(id, index);
                    }
                }

            }
        } else {
            alert('Snack Not Found!!!!');
        }
    }

    const addVote = (id, index) => {
        let config = {
            headers: {
                'Authorization': 'Bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
            }
        }
        let URL = `http://localhost:3000/snacks/vote/${id}`;
        axios.post(
            URL, null,
            config
        ).then(res => {
            //update remain
            setRemainCount(remainCount - 1);
            setSelectionCount(selectionCount + 1);

            let data = res.data;
            card[index].votes = data.votes;
            card[index].isSelected = true;
            data.selectionId = Math.random();
            setSelected([...selected, data]);
        }).catch(console.log);
    }

    return (
        <div className="u-constrainer">
            <div className="layoutPanel">
                <div className="layoutPanel-hd d-flex-center flex-col">
                    <div className="layoutPanel-hd-title">
                        <h2 className="hdg hdg_2 mix-hdg_dark">Snack Voting</h2>
                    </div>
                    <div className="heroBanner-content-bd ">
                        <p className="copy mix-hdg_dark">Vote on the snacks you want to see in this month's rotation</p>
                    </div>
                    <div className="counter">
                        <span> {remainCount} remaining</span>
                    </div>
                    <div className='snack-wrapper d-flex'>
                        <div className='available'>
                            <header className='header-available d-flex'>
                                <span className='header-text'>Available Items</span>
                                <span>{count}</span>
                            </header>
                            {card.map(item =>
                                <div className='item-available d-flex' key={item.id}>
                                    <button onClick={() => vote(item.id)}> + </button>
                                    <div className='item-available-content  d-flex'>
                                        <span>{item.product}</span>
                                        <span>{item.votes}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='selection '>
                            <header className='header-selection d-flex'>
                                <p className='header-text'>Selection</p>
                                <span>{selectionCount}</span>
                            </header>
                            <div className='list-selection d-flex'>
                                {selected.map(obj =>
                                    <div className='list-selection-item d-flex' key={obj.selectionId}>
                                        <span>{obj.product}</span>
                                        <span>{obj.votes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnackVoting