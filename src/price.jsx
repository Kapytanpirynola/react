import React from "react";

function Pricing() {
    return(  
        <div class="background">
        <div class="container">
            <div class="panel pricing-table">
            
            <div class="pricing-plan">
                {/* <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img"/> */}
                <h2 class="pricing-header">FREE TRAIL</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">ACCESS TO THE COMPLETE LIBRARY OF MOVIES AND TV SHOWS.</li>
                <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
                </ul>
                <span class="pricing-price">Free</span>
                <a href="#/" class="pricing-button">Sign up</a>
            </div>
            
            <div class="pricing-plan">
               {/*  <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"/> */}
                <h2 class="pricing-header">1 MONTH</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">TRANSMISSION IN HD OR ULTRA HD QUALITY.</li>
                <li class="pricing-features-item">Multiple workers for more powerful apps</li>
                </ul>
                <span class="pricing-price">$120</span>
                <a href="#/" class="pricing-button is-featured">BUY NOW</a>
            </div>
            
            <div class="pricing-plan">
                {/* <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img"/> */}
                <h2 class="pricing-header">6 MONTH</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">TRANSMISSION IN HD OR ULTRA HD QUALITY.</li>
                <li class="pricing-features-item">OFFLINE DOWNLOADS TO VIEW OFFLINE CONTENT.</li>
                <li class="pricing-features-item">NO ADVERTISING IN THE CONTENT.</li>
                <li class="pricing-features-item">MORE THAN 3 DEVICES.</li>
                </ul>
                <span class="pricing-price">$450</span>
                <a href="#/" class="pricing-button">BUY NOW</a>
            </div>
            
            </div>
        </div>
    </div>
    );
}
export default Pricing;