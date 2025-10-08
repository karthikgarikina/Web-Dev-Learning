import React from "react";
import { useParams } from "react-router-dom";
import './CardDetails.css';
function CardDetails(){
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
    const {id}=useParams();
    const card=cardsData.find(card=>card.id===parseInt(id));
    return(
        <div className="card-details">
           <h1>Overall Card Details</h1>
           <img src={card.image} alt="" />
           <h2>Title:{card.title}</h2>
           <p>Description:{card.description}</p>
        </div>
    )
}
export default CardDetails;