import OrderNow from "./OrderNow";
import './Catering.scss';

export default function Catering(){
    return(
        <div>
            <nav className="cateringNav">
                    <div>
                        <div>Logo</div>
                        <div className="cateringNavContainer">
                            <ul>
                                <li> 
                                    <a>1 &#41; Order Details</a>
                                </li>
                                <li>2 &#41; Build your meal</li>
                                <li>3 &#41; checkout </li>
                            </ul>
                            <span>SIGN IN</span>
                        </div>
                    </div>
            </nav>
            <section className="orderFirstSection">
                <h1>TELL US ABOUT YOUR ORDER</h1>
                <div className="choosingContainer">
                    <span>How would you like to get your meal?</span>
                    <div className="decisionContainer">
                        <div>
                            <div className="pickupContainer">
                                <button className="decision pickup"></button>
                                <span>I'll pick up</span>
                            </div>

                            <div className="orderContainer">
                                <button className="decision order"></button>
                                <span>Deliver to me</span>
                                <small>$100.00 order minimum</small>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="cateringSection">
               
                    <div className="addressListContainer">

                        <div className="address 1st">
                            <span>
                                <svg viewBox="0 0 50 50" width={48} height={48} xmlns="http://www.w3.org/2000/svg">
                                    <path  fill={"yellow"} d={"M24 4C32.7966 4 39 10.9202 39 20.0982C39 27.6074 34.2712 34.9202 24 44C13.7288 34.9208 9 27.6079 9 20.0987C9 10.9202 15.2034 4 24 4Z"}/>
                                    <text x="40%" y="50%" zIndex={"-1"}>1</text>
                                </svg>
                            </span>
                            <div>
                                <h2>20 MIDTOWN</h2>
                                <h4>241 20th St S Birmingham, AL 32511</h4>
                                <h3>(659)241-2841</h3>
                                
                            </div>
                            <h3>VIEW HOURS</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>MON:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>TUE:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>WED:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>THU:</td>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <td>FRI:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>SAT:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>SUN:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="address 2nd">
                            <h2>RIVERCHASE</h2>
                            <h4>3076 John Hawkins Parkway Hoover, AL 35244</h4>
                            <h3>(205)460-5709</h3>
                            <h3>VIEW HOURS</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>MON:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>TUE:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>WED:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>THU:</td>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <td>FRI:</td>
                                        <td>10:45 AM - 8:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>SAT:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>SUN:</td>
                                        <td>10:45 AM - 9:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <OrderNow/>
               
            </section>
        </div>
    )
}