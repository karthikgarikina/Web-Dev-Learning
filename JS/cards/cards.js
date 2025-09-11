{
    var card_info=[
        {"image":"./demo","price":"2000/-","brand":"guchi"},
        {"image":"./demo","price":"13000/-","brand":"adidas"},
        {"image":"./demo","price":"21000/-","brand":"campus"},
        {"image":"./demo","price":"1000/-","brand":"maharaj"},
        {"image":"./demo","price":"91000/-","brand":"soora"},
        {"image":"./demo","price":"32000/-","brand":"ck"},
        {"image":"./demo","price":"11000/-","brand":"salaar"},
        {"image":"./demo","price":"42000/-","brand":"us polo"},
        {"image":"./demo","price":"23000/-","brand":"dc"},
        {"image":"./demo","price":"2000/-","brand":"guchi"}
    ];
    var cards=card_info.map((ele)=>{
        return (
            `<div class="card">
                <div class="image-section">
                    <img src="${ele.image}" alt="loading..">
                </div>
                <div class="detals-section">
                    <div class="price">price: ${ele.price}</div>
                    <div class="brand">brand: ${ele.brand}</div>
                </div>
            </div>`
        )
    })

    let parent=document.getElementsByClassName("cards-parent")[0];
    cards=cards.join(" ");
    console.log(cards);
    parent.innerHTML=cards;
}