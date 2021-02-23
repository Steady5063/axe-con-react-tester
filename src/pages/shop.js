import React, { Component } from "react";
import TopHeading from "../components/topHeading"
import Listing from "../components/listing"
class Shop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
      <TopHeading headingText="Shop"/>
      <p>
        The galaxy has made it very difficult to purchase and buy the things you need for proper light saber completion. 
      </p>

      <Listing saberName="Windu Saber" 
      saberDetails="Here is some data for this string that says what the details are on this thing" 
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9YhBNQ4XN66hz6MWTvvimIAiK6Dr2BEsjA3raLs7f7u7XoPEZbm8AoqQgw&usqp=CAc"
      link="/details" />
      <Listing saberName="Sith Saber"
      saberDetails="Here is some data for this string that says what the details are on this thing" 
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXsRIKGQVeYUbF8jXBXjtOUQ0Lv-_5OlZtTO8M7vp3lDtFB3TmyTk4lmg7Q&usqp=CAc" link="/bladeDetails"/>
      <Listing saberName="Cross Saber"
      saberDetails="Here is some data for this string that says what the details are on this thing" 
      imageSrc="https://m.media-amazon.com/images/I/610t-TUKOeL._AC_SL1000_.jpg" link="/detailsCross"/>
      <Listing saberName="Double Saber"
      saberDetails="Here is some data for this string that says what the details are on this thing" 
      imageSrc="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvAAeNGCe9RaMeU9bL14q_-Qo6UFAwiUZ_w_12Y5ttYXQ15ZCxRKcJJAwUriPwRAFRNloh8TSgIJ9aF3VLUMdNcAcmv534_jGJp-NfAX7G&usqp=CAc" link="/detailsDouble"/>


    </div>
    );
  }
}
export default Shop;
