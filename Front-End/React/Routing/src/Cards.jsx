import React from "react";
import { useNavigate } from "react-router-dom";
import './Cards.css';
function Cards(){
    const cardsData = [
        {
            id: 1,
            title: "Web Development",
            description: "Learn how to build responsive and modern websites using HTML, CSS, and JavaScript.",
            image: "https://tse2.mm.bing.net/th/id/OIP.iAEMCYETP4pmFVmkbbPPHgHaF7?pid=Api&P=0&h=220"
        },
        {
            id: 2,
            title: "Machine Learning",
            description: "Understand the basics of machine learning and build predictive models using Python.",
            image: "https://tse3.mm.bing.net/th/id/OIP.RX_HMIio-bABHPSH1LtCMQHaHa?pid=Api&P=0&h=220"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Explore the principles of user interface and experience design to create stunning layouts.",
            image: "https://png.pngtree.com/png-clipart/20210321/original/pngtree-technology-logo-template-png-image_6139771.jpg"
        }
    ];
    const navigate=useNavigate();

    return(
        <div className="cards">
            {
                cardsData.map(card=>{
                    return(
                        <div className="card" onClick={()=>navigate(`/card-details/${card.id}`)}>
                            <h1>{card.title}</h1>
                            <img src={card.image} alt="" />
                        </div>
                    ) 
                })
            }
        </div>
    )
}
export default Cards;