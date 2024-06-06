import React, { useState } from "react";
import "./main.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

function Main() {

  const [activeAccordian, setActiveAccordian] = useState(null);

  const handleToggle = (index) => {
    setActiveAccordian(activeAccordian === index ? null : index);
  };
 
 

  const faqData = [
    {
      question: "How can I earn money by walking?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo maxime repellat tenetur ea? Facere ipsam a veniam fugiat explicabo aut accusantium praesentium maiores ex, illo, suscipit provident accusamus corporis error repellendus nihil qui. Architecto, iusto inventore! Cum natus repellendus assumenda."
    },
    {
      question: "How can I sell my shoes?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo maxime repellat tenetur ea? Facere ipsam a veniam fugiat explicabo aut accusantium praesentium maiores ex, illo, suscipit provident accusamus corporis error repellendus nihil qui. Architecto, iusto inventore! Cum natus repellendus assumenda."
    },
    {
      question: "What can I do if my shoes get worn out?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo maxime repellat tenetur ea? Facere ipsam a veniam fugiat explicabo aut accusantium praesentium maiores ex, illo, suscipit provident accusamus corporis error repellendus nihil qui. Architecto, iusto inventore! Cum natus repellendus assumenda."
    },
    {
      question: "How are the rarity levels of shoes determined?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo maxime repellat tenetur ea? Facere ipsam a veniam fugiat explicabo aut accusantium praesentium maiores ex, illo, suscipit provident accusamus corporis error repellendus nihil qui. Architecto, iusto inventore! Cum natus repellendus assumenda."
    }
  ];
  return (
    <div className="main">
      <nav>
        <div className="nav-inner">
          <img src={"/assets/Logo.png"} alt="" />
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Career</li>
            </ul>
          </div>
          <button className="launch-app">Launch App</button>
        </div>
      </nav>

      <div className="Earn-to_move">
        <h1>Earn to move</h1>
        <p>
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run, or exercise to
          earn. Each step matters.
        </p>
        <div className="Earn-buttons">
          <div className="playstore">
            <img src={"/assets/playstore.png"} alt="" />
            <button>Playstore</button>
          </div>
          <div className="appstore">
            <img src={"/assets/appstore.png"} alt="" />
            <button>Appstore</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card1">
          <div className="card-inner">
            <div className="circle-image">
              <img src={"/assets/fire 1.png"} alt="" />
            </div>
            <div className="card-content">
              <div className="numbers">
                <h1>+112,256.60</h1>
                <p>Kcal</p>
              </div>
              <div className="name">
                <h1>Calories burned</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="card-inner">
            <div className="circle-image">
              <img src={"/assets/road.png"} alt="" />
            </div>
            <div className="card-content">
              <div className="numbers">
                <h1>+1,600,000.35</h1>
                <p>Meter(M)</p>
              </div>
              <div className="name">
                <h1>Calories burned</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card3">
          <div className="card-inner">
            <div className="circle-image">
              <img src={"/assets/scale.png"} alt="" />
            </div>
            <div className="card-content">
              <div className="numbers">
                <h1>+112,256.60</h1>
                <p>Kilogram(KG)</p>
              </div>
              <div className="name">
                <h1>Calories burned</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card4">
          <div className="card-inner">
            <div className="circle-image">
              <img src={"/assets/users.png"} alt="" />
            </div>
            <div className="card-content">
              <div className="numbers">
                <h1>+112,256.60</h1>
                <p>Users</p>
              </div>
              <div className="name">
                <h1>Calories burned</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="walking">
        <div className="walking-inner">
          <h1>Earn while walking</h1>
          <div className="circles">
            <div className="circle-inner">
              <img src={"/assets/Group 11.png"} alt="" />
            </div>
            <div className="circle-inner-line">
              <p className="line"></p>
              <p className="line2"></p>
              <p className="line"></p>
              <p className="line2"></p>
            </div>
            <div className="circle-inner">
              <img src={"/assets/Group 9.png"} alt="" />
            </div>
            <div className="circle-inner-line">
              <p className="line"></p>
              <p className="line2"></p>
              <p className="line"></p>
              <p className="line2"></p>
            </div>
            <div className="circle-inner">
              <img src={"/assets/Group 10.png"} alt="" />
            </div>
          </div>
          <div className="circle-below">
            <h3>Take a step</h3>
            <h3>Earn</h3>
            <h3>Complete the tasks</h3>
          </div>
        </div>
      </div>

      <div className="girl">
        <div className="cat-inner">
          <div className="cat-left">
            <h1>Download BetterStep</h1>
            <p>
              Start earning money by walking! Download our app now and convert
              your steps into earnings with our blockchain and
              cryptocurrency-based experience.
            </p>
          </div>
          <div className="cat-right">
            <img src={"/assets/monster.png"} alt="" />
          </div>
        </div>
      </div>

      <div className="monster">
        <div className="monster-inner">
          <div className="monster-left">
            <img src={"/assets/monster.png"} alt="" />
          </div>
          <div className="monster-right">
            <h1>Walk, earn, and thrive</h1>
            <p>
              The earned rewards are distributed equally in $BTT and $BFF
              tokens. Our goal is to provide users with a fun, rewarding, and
              innovative experience. Discover our project now and turn your
              steps into earnings.
            </p>
            <h4>Launch App</h4>
          </div>
        </div>
      </div>

      <div className="level">
        <div className="level-inner">
          <h1>Rarity Level</h1>
          <p>More information about the rarity levels of NFTs</p>
          <div className="colorfull-circles">
            <div className="circlea"></div>
            <div className="circleb"></div>
            <div className="circlec"></div>
            <div className="circled"></div>
          </div>
        </div>
      </div>

      <div className="rarity-table">
        <div className="table-inner">
          <table>
            <tr>
              <th>Rarity</th>
              <th>Color</th>
              <th>Name</th>
              <th>Supply</th>
            </tr>
            <tr>
              <td>Red</td>
              <td>
                <img src={"/assets/orange.png"} alt="" />
              </td>
              <td>Common</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>
                <img src={"/assets/blue.png"} alt="" />
              </td>
              <td>Common</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>
                <img src={"/assets/green.png"} alt="" />
              </td>
              <td>Common</td>
              <td>1800</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="languages">
        <div className="languages-inner">
          <div className="language-card">
            <img src={"/assets/bnb.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/harmony.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/harmonyb.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/bnb.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/harmonyb.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/react.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/bnb.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/fire.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/react.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/harmony.png"} alt="" />
          </div>
          <div className="language-card">
            <img src={"/assets/js.png"} alt="" />
          </div>
        </div>
      </div>

      <div className="team">
        <div className="team-inner">
          <h1>Our team</h1>
          <div className="team-card">
            <div className="team-inner-card">
              <img src={"/assets/measum.jpg"} alt="" />
              <h4>MEasum Abbas</h4>
              <p>Web developer</p>
            </div>
            <div className="team-inner-card">
              <img src={"/assets/aliyas.jpg"} alt="" />
              <h4>Aliyas Muhammad</h4>
              <p>Web developer</p>
            </div>
            <div className="team-inner-card">
              <img src={"/assets/hasnain.jpg"} alt="" />
              <h4>Hasnain Abbas</h4>
              <p>Web developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
          <h1 className="top-heading">FAQ</h1>
          {faqData.map((faq,index)=>(
        <div className="faq-inner" key={index}>
          <div className="accordian">
            <div className="accordian-heading" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <IoMdArrowDroprightCircle className="accordian-icon"/>
            </div>
            {activeAccordian === index && (
              <div className="accordian-box">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
            ))}
      </div>

      <footer>
        <div className="footer-inner">
          <div className="first-link">
            <div className="link-heading">
            <h1>NFT Gallery</h1>
            </div>
            <div className="f-links">
              <ul>
             <li>+9233_3245666</li>
                <li>hello@gmail.com</li>
                <li>Lorem ipsum dodfghfghghj</li>
                <li>dfghjhgfh</li>
              </ul>
            </div>
          </div>
          <div className="first-link">
            <div className="link-heading">
            <h1>Explore</h1>
            </div>
            <div className="f-links">
              <ul>
                <li>MY Account</li>
                <li>List of Coins</li>
                <li>Privacy Policy</li>
                <li>FAQS</li>
              </ul>
            </div>
          </div>
          <div className="first-link">
            <div className="link-heading">
            <h1>Marketplac</h1>
            </div>
            <div className="f-links">
              <ul>
                <li>Create A</li>
                <li>Store</li>
                <li>Start selling</li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
          <div className="first-link">
            <div className="link-heading">
            <h1>Community</h1>
            </div>
            <div className="f-links">
              <ul>
                <li>Art</li>
                <li>Digital Art</li>
                <li>Photography</li>
                <li>Games</li>
              </ul>
            </div>
          </div>
         
        </div>
         <div className="copyright">
          <h2>@CopyRight 2021.Powered by Aliyas</h2>
         </div>
      </footer>
    </div>
  );
}

export default Main;
