import React from 'react'

const Footer = () => {
    return (
        <footer className="site-ft">

            <div className="footer u-constrainer">
                <div className="footer-primary">
                    <a className="footLogo">
                        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300">
                            <g>
                                <path d="M385 96.4c0 2.8-.4 5.4-1.1 7.7-.8 2.3-1.8 4.3-3.1 6-1.3 1.7-2.9 3-4.8 3.9-1.9.9-4 1.4-6.2 1.4-2.6 0-4.9-.5-6.9-1.6s-3.8-2.6-5.4-4.7c2.5-1.8 4.5-4.3 6-7.3s2.3-6.3 2.3-9.8c0-4.3-1.3-7.7-3.8-10.3-2.6-2.5-6.1-3.8-10.5-3.8-2.7 0-5.2.5-7.4 1.5-2.3 1-4.2 2.4-5.8 4.2-1.6 1.8-2.8 3.9-3.7 6.4s-1.3 5.2-1.3 8.2c0 4.5 1.1 8.6 3.2 12.6 2.2 3.9 4.9 7.8 8.2 11.6 3.3 3.8 6.8 7.6 10.6 11.5 3.8 3.9 7.3 8.1 10.6 12.5s6 9.2 8.2 14.3c2.2 5.1 3.2 10.8 3.2 17 0 6.6-1.4 12.7-4.1 18.3-2.8 5.6-6.6 10.4-11.4 14.5-4.9 4.1-10.6 7.3-17.2 9.6s-13.7 3.5-21.4 3.5c-6.4 0-12.2-.8-17.4-2.5s-9.7-4.1-13.4-7.2c-3.7-3.1-6.6-6.8-8.6-11.2-2-4.3-3-9.1-3-14.4 0-4.5.7-8.6 2.2-12.5 1.4-3.9 3.4-7.2 5.9-10.1 2.5-2.8 5.4-5.1 8.8-6.7 3.4-1.6 7-2.5 10.9-2.5 4.7 0 8.7 1.2 11.9 3.5 3.2 2.4 5.2 5.6 6 9.7-3.5 0-6.7.5-9.5 1.5s-5.2 2.4-7.2 4.1-3.5 3.9-4.6 6.4c-1.1 2.5-1.6 5.4-1.6 8.5 0 5.9 1.7 10.6 5.2 14 3.4 3.4 8.1 5.2 13.9 5.2 3.5 0 6.8-.6 9.8-1.9 3-1.3 5.6-3 7.8-5.3 2.2-2.2 3.9-4.9 5.1-8 1.2-3.1 1.9-6.4 1.9-10 0-3.7-.6-7.2-1.8-10.6-1.2-3.4-2.8-6.6-4.9-9.8-2-3.2-4.3-6.3-6.9-9.4-2.6-3.1-5.2-6.2-7.9-9.3-2.7-3.1-5.3-6.2-7.9-9.4-2.6-3.1-4.8-6.4-6.9-9.7-2-3.3-3.7-6.7-4.9-10.3-1.2-3.5-1.8-7.3-1.8-11.2 0-5.3 1.1-10.2 3.4-14.7s5.4-8.4 9.4-11.6c4-3.3 8.8-5.8 14.3-7.7 5.5-1.9 11.5-2.8 18-2.8 5.4 0 10.3.7 14.7 2 4.4 1.3 8.1 3.2 11.2 5.7 3.1 2.5 5.5 5.4 7.2 8.9 1.6 4 2.5 7.9 2.5 12.1zM498.5 184.2c-2.8 8.3-5.8 14.8-9.1 19.7-3.2 4.9-6.5 8.7-9.8 11.2-3.3 2.6-6.6 4.3-9.7 5.1-3.2.8-6.1 1.2-8.8 1.2-4.5 0-8.2-.6-11.2-1.9-3-1.3-5.4-3-7.3-5.1-1.8-2.1-3.2-4.6-4-7.3-.8-2.7-1.2-5.5-1.2-8.4 0-3.4.5-7.4 1.4-11.9.9-4.6 2-9.2 3.1-14 1.1-4.8 2.1-9.4 3.1-13.9.9-4.5 1.4-8.3 1.4-11.5 0-6.9-2.4-10.3-7.3-10.3-1.8 0-3.5.5-5.1 1.5s-3 2.3-4.3 4c-1.3 1.7-2.5 3.6-3.5 5.9-1 2.3-2 4.7-2.8 7.2l-13.7 64.5h-29L402 119.6h29l-2.2 10.4c2.2-2.4 4.3-4.4 6.4-5.8 2.1-1.5 4.2-2.6 6.2-3.4 2-.8 3.9-1.3 5.7-1.6 1.8-.3 3.5-.4 5.1-.4 3.2 0 6.2.4 8.9 1.3 2.8.9 5.1 2.2 7.1 4 2 1.8 3.6 4.2 4.7 7.1 1.1 2.9 1.7 6.3 1.7 10.3 0 2.7-.2 5.6-.7 8.7-.5 3.1-1.1 6.3-1.8 9.5s-1.5 6.5-2.3 9.7c-.8 3.2-1.6 6.3-2.3 9.2-.7 2.9-1.3 5.7-1.8 8.2-.5 2.5-.7 4.7-.7 6.6 0 2.5.6 4.5 1.7 6.1 1.1 1.6 3.3 2.4 6.3 2.4 2.2 0 4.1-.4 5.7-1.3 1.6-.9 3.1-2.1 4.4-3.6 1.3-1.6 2.5-3.5 3.6-5.6 1.1-2.2 2.1-4.6 3.2-7.2h8.6z" />
                                <path d="M604.3 184.2c-1.9 5.4-4 10.2-6.2 14.1-2.2 4-4.5 7.4-6.9 10.1-2.4 2.8-4.8 5-7.3 6.7-2.5 1.7-4.9 3-7.3 3.9-2.4.9-4.6 1.5-6.8 1.9-2.2.3-4.1.5-5.9.5-5.7 0-10.2-1.6-13.6-4.7-3.4-3.1-5.4-7.7-6.1-13.8-1.6 2.3-3.4 4.5-5.4 6.7-2 2.2-4.2 4.2-6.6 5.9-2.4 1.7-5.1 3.1-8.1 4.2s-6.3 1.6-9.9 1.6c-3.5 0-6.8-.6-10-1.7s-6.1-2.9-8.5-5.5c-2.5-2.6-4.5-5.9-6-10s-2.3-9.2-2.3-15.1c0-4.6.5-9.5 1.4-14.7.9-5.2 2.3-10.5 4.2-15.7 1.9-5.2 4.3-10.3 7.1-15.1 2.8-4.8 6.2-9.1 10-12.8 3.8-3.7 8.2-6.6 13-8.8 4.8-2.2 10.2-3.3 16-3.3 5.7 0 9.8 1 12.4 2.9 2.6 2 3.9 4.4 3.9 7.3v1.5l2.2-10.7h29L572.2 188c-.3 1.1-.6 2.2-.7 3.3-.1 1.1-.2 2.1-.2 3.2 0 5.8 2.8 8.6 8.3 8.6 2 0 3.8-.5 5.5-1.5 1.7-1 3.2-2.4 4.6-4.1 1.4-1.7 2.6-3.7 3.6-6s1.9-4.8 2.7-7.3h8.3zm-50.7-45.4c0-.6-.1-1.3-.4-2.2-.3-.9-.7-1.7-1.3-2.6-.6-.8-1.5-1.5-2.5-2.1-1-.6-2.4-.8-4-.8-2.8 0-5.5.9-8 2.8-2.5 1.8-4.8 4.3-6.9 7.3-2.1 3-4 6.5-5.6 10.4-1.6 3.9-3 7.8-4.2 11.9-1.1 4.1-2 8.1-2.6 12.1-.6 4-.9 7.5-.9 10.7 0 3.9.4 6.8 1.1 8.9.7 2.1 1.6 3.7 2.6 4.7s2.1 1.6 3.3 1.8 2.2.3 3.1.3c1.5 0 3.1-.4 4.8-1.1 1.7-.8 3.3-1.9 4.8-3.3 1.5-1.5 2.9-3.3 4.2-5.6 1.3-2.2 2.2-4.8 2.9-7.8l9.6-45.4z" />
                                <path d="M612.9 103.7c1.4-7.2 3.6-13 6.3-17.5 2.8-4.5 5.9-7.9 9.3-10.4 3.4-2.5 6.9-4.2 10.6-5 3.7-.8 7.1-1.3 10.4-1.3 3 0 5.9.5 8.8 1.6 2.8 1 5.4 2.5 7.6 4.4 2.2 1.9 4 4.2 5.3 6.8 1.3 2.7 2 5.6 2 8.9 0 3.1-.2 5.9-.6 8.3h-9.4c.1-1.1.2-2.1.3-2.8.1-.8.1-1.6.1-2.6 0-2.3-.8-4-2.3-5.2-1.5-1.1-3.3-1.7-5.4-1.7-1 0-2.2.2-3.6.7-1.3.5-2.7 1.3-4 2.5-1.3 1.2-2.6 2.9-3.7 5.1-1.1 2.2-2 4.9-2.7 8.3l-3.4 15.9h14.7l-1.5 8.1h-14.8l-23.2 108.7c-1.4 7.2-3.5 13-6.2 17.5s-5.7 7.9-9 10.4-6.8 4.2-10.4 5c-3.6.9-7 1.3-10.3 1.3-3 0-5.9-.5-8.8-1.6-2.8-1-5.4-2.5-7.6-4.4-2.2-1.9-4-4.2-5.4-6.8-1.3-2.7-2-5.6-2-8.9 0-4.7.9-8.6 2.7-11.7 1.8-3.2 4.3-5.9 7.4-8.2 3.1-2.3 6.8-4.2 11-5.7 4.2-1.6 8.7-3.1 13.5-4.5l24.3-115.2zm-25.7 121.5c-3.1 1-6.1 2.2-8.8 3.5-2.7 1.3-5.1 2.8-7 4.4-2 1.7-3.5 3.6-4.6 5.6-1.1 2.1-1.7 4.5-1.7 7.2 0 .8.2 1.6.6 2.4.4.8 1 1.5 1.7 2.1.7.6 1.6 1.1 2.6 1.6 1 .4 2.1.6 3.2.6 1 0 2.1-.2 3.2-.7 1.1-.5 2.1-1.3 3.1-2.6 1-1.2 1.9-2.8 2.8-4.9.9-2 1.6-4.6 2.3-7.6l2.6-11.6zM762.7 143.8c-3.9 4.1-9 7.6-15.2 10.5-6.2 2.9-13 4.9-20.4 6.2-.8 9.3-2.6 17.7-5.4 25.2-2.8 7.5-6.3 13.8-10.6 19.1-4.3 5.2-9.1 9.3-14.6 12.1-5.5 2.8-11.3 4.2-17.5 4.2-4.7 0-9-.6-12.9-1.7-4-1.1-7.4-3-10.2-5.5-2.8-2.5-5.1-5.8-6.7-9.8-1.6-4-2.4-8.9-2.4-14.7 0-3.9.4-8.4 1.2-13.4.8-5 2.1-10.2 3.9-15.5 1.8-5.3 4.1-10.5 7-15.6 2.8-5.1 6.3-9.6 10.4-13.6 4.1-4 8.8-7.2 14.2-9.7 5.4-2.5 11.5-3.7 18.4-3.7 17.2 0 25.8 10.7 25.8 32.1v.2c.3.1.6.2.9.2h1.2c2.4 0 4.9-.3 7.6-1 2.7-.7 5.5-1.6 8.2-2.7 2.8-1.1 5.4-2.4 8.1-3.9 2.6-1.5 5-3 7.2-4.5l1.8 5.5zm-52.4 17.3c-2.1-.5-3.5-1.6-4.3-3.1-.8-1.5-1.1-3.3-1.1-5.4 0-2.8.6-5.1 1.7-6.9 1.1-1.8 2.7-3.1 4.6-4-.1-2.2-.4-4-.7-5.5-.3-1.5-.8-2.7-1.4-3.6-.6-.9-1.3-1.6-2.2-2-.9-.4-2-.6-3.4-.6-2.4 0-4.8.9-7 2.8s-4.3 4.3-6.3 7.4c-2 3.1-3.8 6.6-5.5 10.6-1.7 4-3.1 8-4.3 12.2-1.2 4.2-2.1 8.3-2.8 12.4-.7 4.1-1 7.8-1 11.2 0 3.3.2 6.1.5 8.2.4 2.1.9 3.8 1.8 5 .8 1.2 1.9 2 3.2 2.5 1.3.5 2.9.7 4.8.7 2.4 0 4.9-1.1 7.3-3.2 2.5-2.2 4.7-5.1 6.8-8.8 2.1-3.7 3.9-8.2 5.6-13.3 1.7-5.2 2.9-10.7 3.7-16.6z" />
                                <path d="M835.8 131.1c-1.1 2.2-2.3 4.5-3.6 7-1.3 2.5-2.8 5-4.4 7.5-1.7 2.5-3.5 4.8-5.6 7-2.1 2.2-4.4 4-7.1 5.5-.7 9.6-2.3 18.3-5 26.1-2.7 7.8-6.1 14.4-10.4 19.8-4.2 5.4-9.1 9.6-14.6 12.6-5.5 2.9-11.5 4.4-17.8 4.4-4.7 0-9-.6-12.9-1.7-4-1.1-7.4-3-10.2-5.5-2.8-2.5-5.1-5.8-6.7-9.8-1.6-4-2.4-8.9-2.4-14.7 0-3.9.4-8.4 1.2-13.4s2-10.2 3.8-15.5c1.7-5.3 4-10.5 6.8-15.6s6.2-9.6 10.2-13.6c4-4 8.7-7.2 14.1-9.7 5.4-2.5 11.5-3.7 18.5-3.7 15.8 0 24.4 9 25.5 27.1 1.7-.4 3.3-1.1 4.8-2.3 1.5-1.1 2.8-2.4 4-3.7 1.2-1.4 2.3-2.8 3.2-4.2.9-1.4 1.7-2.7 2.3-3.6h6.3zm-37.8 30c-3.2-1.2-4.8-4.2-4.8-9 0-5.2 1.9-8.7 5.7-10.5-.3-4.3-1.1-7.3-2.2-9-1.1-1.7-3-2.5-5.5-2.5-2.4 0-4.7.9-6.9 2.8s-4.3 4.3-6.3 7.4c-2 3.1-3.8 6.6-5.4 10.6-1.6 4-3 8-4.1 12.2-1.1 4.2-2 8.3-2.7 12.4-.6 4.1-.9 7.8-.9 11.2 0 3.3.2 6.1.5 8.2.4 2.1.9 3.8 1.8 5 .8 1.2 1.9 2 3.2 2.5 1.3.5 2.9.7 4.8.7 2.4 0 4.8-1.1 7.2-3.2 2.4-2.2 4.6-5.1 6.6-8.8 2-3.7 3.8-8.2 5.4-13.3 1.7-5.3 2.8-10.8 3.6-16.7z" />
                            </g>
                            <g>
                                <path d="M145.1 17.5c-16.7-5.8-34.6-4.7-50.5 2.9-15.9 7.6-28 21.2-33.9 38.1-6 17.3-5 35.7 3 52l59.4 121.9c4.2 8.7 14.7 12.3 23.4 8.1L174 227l16.1 39.6c2.2 5.5 6.7 9.8 12.2 12s11.8 1.8 17.1-.8c5.3-2.6 9.4-7.3 11.1-13 1.7-5.7 1.1-11.8-1.9-17l-21.2-37.1 12.2-5.9.4.7c1.3 2.6 3.5 4.5 6.2 5.4 2.7.9 5.5.7 8.1-.5.1 0 .1-.1.2-.1 5.2-2.6 7.2-9.1 4.7-14.4l-.5-1c6-5 8.1-13.7 4.5-21.1L183.4 51.4c-7.8-16-21.4-28-38.3-33.9zM68.8 61.3c5.1-14.7 15.4-26.4 29.1-33 .1-.1.2-.1.4-.2 13.9-6.6 29.5-7.5 44.1-2.5 14.7 5.1 26.6 15.6 33.4 29.6l53.6 110-83.4 40.6c-2.1 1-3 3.6-2 5.7l2.5 5.1c.6 1.3.1 2.8-1.2 3.5s-2.8.1-3.5-1.2l-2.5-5.1c-1-2.1-3.6-3-5.7-2l-9.1 4.4-53.2-109.4c-6.9-14.2-7.8-30.4-2.5-45.5zm152.5 190.8c1.8 3.1 2.2 6.8 1.1 10.3-1.1 3.5-3.5 6.2-6.7 7.8s-6.9 1.7-10.3.5-6-3.9-7.4-7.2l-16.3-40.1 18.1-8.8 21.5 37.5zm10-62.4c-2.1 1-3 3.6-2 5.7l2.1 4.4c.6 1.1.2 2.6-.9 3.1-.7.3-1.4.2-1.7.1-.3-.1-.9-.4-1.3-1.1l-2.2-4.5c-1-2.1-3.6-3-5.7-2l-77 37.5c-4.5 2.2-9.8.3-12-4.1l-2.4-4.9 5.2-2.6.6 1.2c2.7 5.5 9.3 7.8 14.8 5.1s7.8-9.3 5.1-14.8l-.6-1.2 79.5-38.7 2.4 4.9c2.4 4.3.5 9.7-3.9 11.9z" />
                                <path d="M103.5 39.8c22.3-10.9 49.3-1.6 60.1 20.8l22.1 45.4c1 2.1 3.6 3 5.7 2s3-3.6 2-5.7l-22.1-45.4c-12.9-26.5-45-37.6-71.5-24.7-2.1 1-3 3.6-2 5.7s3.6 2.9 5.7 1.9zM195.2 115.6c-2.1 1-3 3.6-2 5.7l9.5 19.4c1 2.1 3.6 3 5.7 2s3-3.6 2-5.7l-9.5-19.4c-1.1-2.2-3.6-3-5.7-2z" />
                            </g>
                        </svg>
                    </a>
                </div>
                <div className="footer-secondary">
                    <nav className="hList hList_divided u-vr_x3">
                        <a className="navLink navLink_dark" href="#">Home</a>
                        <a className="navLink navLink_dark" href="#">Current</a>
                        <a className="navLink navLink_dark" href="#">Voting</a>
                        <a className="navLink navLink_dark" href="#">Sign Up</a>
                    </nav>
                    <small className="finePrint">&copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN 55431</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer