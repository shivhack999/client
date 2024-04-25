import React, { useRef } from 'react'
import images1 from '../../assets/shoes.png';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCaretLeft , FaCaretRight } from "react-icons/fa";
import './cardStyle.css';
import { Link } from 'react-router-dom';
const CardIndex = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollLeft = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft - 100,
            behavior: 'smooth' // Add smooth scrolling behavior
          });
        }
      };
    
      const scrollRight = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + 100,
            behavior: 'smooth' // Add smooth scrolling behavior
          });
        }
      };
  return (
    <>
        <div className="container mt-5">
            <div className="d-flex flex-row productHeading pt-3">
                <h2 className='flex-grow-1 ps-2'>Top View</h2>
                <Link to="a"><button className="btn btn-dark rounded-0">View All</button></Link>
            </div>
            <div className="d-flex flex-row productBox" ref={scrollRef}>
                {/* Button to scroll left */}
                <button onClick={scrollLeft} className='topViewProductScrollLeftBtn'><FaCaretLeft /></button>
                {/* card main part */}
                <a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a>
                <a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a><a href="delails" className='card-outer'>
                <div className="card rounded-0 p-2 pb-0" style={{ width: "16rem", height:"24rem"}}>
                    <img src={images1} className="card-img-top rounded-0" alt="..." />
                    <a href="whilist" className="wishlist-icon"><FaHeart /></a>
                    <div className="card-body">
                        <h6 className="card-title" style={{color:'#FF693A'}}><button className='productOff'>55% off</button> Limited time offers</h6>
                        <p className="card-text">
                        <MdOutlineCurrencyRupee className='rupee' /> 400.00
                        </p>
                    </div>
                </div>
                </a>
                {/* Button to scroll right */}
                <button onClick={scrollRight} className='topViewProductScrollRightBtn'><FaCaretRight /></button>
            </div>
        </div>
    </>
  )
}

export default CardIndex