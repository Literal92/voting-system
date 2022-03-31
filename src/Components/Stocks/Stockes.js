import React from 'react'
import UiCardStock from '../UICardStock/UiCardStock'
const Stockes = () => {

    return (
        <div className='bg-stock'>
            <div className="u-constrainer">
                <div className="layoutPanel">
                    <div className="layoutPanel-hd">
                        <div className="layoutPanel-hd-title">
                            <h2 className="hdg hdg_2 ">Currently In Stock </h2>
                        </div>
                        <div className="heroBanner-content-bd ">
                            <p className="copy">Here are the snacks that are available in the Nerdery kitchen now.
                            </p>
                        </div>
                    </div>
                </div>
                <UiCardStock />
            </div>
        </div>
    )
}

export default Stockes