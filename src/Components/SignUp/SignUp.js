import React from 'react'

const SignUp = () => {
    return (
        <div className="site-bd">
            <div className="site-bd-section site-bd-section_gray">
                <div className="u-constrainer">
                    <div className="layoutPanel">
                        <div className="layoutPanel-hd">
                            <div className="layoutPanel-hd-title">
                                <h2 className="hdg hdg_2 mix-hdg_dark">Sign up for Snafoo updates!</h2>
                            </div>
                        </div>
                        <div className="layoutPanel-bd">
                            <div className="grid">
                                <div className="grid-col grid-col_2of3">
                                    <form className="inputForm">
                                        <div className="inputForm-item inputForm-item_half">
                                            <label className="u-isVisuallyHidden">Fist Name</label>
                                            <input className="inputForm-text" type="text" name="" placeholder="Fist Name" />
                                        </div>
                                        <div className="inputForm-item inputForm-item_half">
                                            <label className="u-isVisuallyHidden">Last Name</label>
                                            <input className="inputForm-text" type="text" name="" placeholder="Last Name" />
                                        </div>
                                        <div className="inputForm-item inputForm-item_half">
                                            <label className="u-isVisuallyHidden">Email</label>
                                            <input className="inputForm-text" type="text" name="" placeholder="Email" />
                                        </div>
                                        <div className="inputForm-item inputForm-item_half">
                                            <label className="u-isVisuallyHidden">Phone Number</label>
                                            <input className="inputForm-text" type="text" name="" placeholder="Phone Number" />
                                        </div>
                                        <div className="inputForm-item">
                                            <label className="u-isVisuallyHidden">Message</label> <textarea className="inputForm-area" placeholder="Message"></textarea>
                                        </div>
                                        <div className="inputForm-item">
                                            <div className="inputForm-item-checkGroup">
                                                <input id="form-employee" className="u-isVisuallyHidden" type="checkbox" />
                                                <label>I am a Nerdery employee</label>
                                            </div>
                                            <div className="inputForm-item-checkGroup">
                                                <input id="form-notify" className="u-isVisuallyHidden" type="checkbox" />
                                                <label>Notify Me for Special Offers!</label>
                                            </div>
                                        </div>
                                        <div className="inputForm-item">
                                            <input className="btn btn_dark" type="submit" value="Sign Up" />
                                        </div>
                                    </form>
                                </div>
                                <div className="grid-col grid-col_1of3">
                                    <div className="media u-vr_x4">
                                        <div className="media-figure">
                                            <svg id="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="-33 35 32 32">
                                                <path fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M-31 61h28V41h-28v20zm0-20l14 10 14-10" />
                                            </svg>
                                        </div>
                                        <div className="media-bd">
                                            <span className="assideText">info@nerdery.com</span>
                                        </div>
                                    </div>
                                    <div className="media u-vr_x4">
                                        <div className="media-figure">
                                            <svg id="icon-fax" xmlns="http://www.w3.org/2000/svg" viewBox="-33 35 32 32">
                                                <path fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M-26 60h-5V44h28v16h-5m-18-6v11h18V54h-18zm18-10v-7h-18v7m15 5h3" />
                                            </svg>
                                        </div>
                                        <div className="media-bd">
                                            <span className="assideText">(877) 664.6373</span>
                                        </div>
                                    </div>
                                    <div className="media u-vr_x4">
                                        <div className="media-figure">
                                            <svg id="icon-locate" xmlns="http://www.w3.org/2000/svg" viewBox="-33 35 32 32">
                                                <circle fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" cx="-17" cy="46" r="4" />
                                                <path fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M-9 50c-3 7-8 15-8 15s-5-8-8-15 2-13 8-13 11 6 8 13z" />
                                            </svg>
                                        </div>
                                        <div className="media-bd">
                                            <span className="assideText">
                                                The Nerdery Snafoo Team
                                                <br />9555 James Ave. S.
                                                <br />Bloomington MN, 55431
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp