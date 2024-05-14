import ServicesList from "./ServicesList";
import '../../CSS/services.css'
function ServicesBlock(){

    const Service = [{ id: 1 ,name : "FREE SHIPPING" ,img :'./images/services/truck.png', description:"Contrary to popular belief, Lorem Ipsum is not simply random text.", info:"Orders Over $99" },
    { id: 2 ,name : "FREE RETURNS" ,img :'./images/services/real-estate-business-house-on-a-hand.png', description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",info:"Need Assistance?" },
    { id: 3 ,name : "24 x 7 SERVICE" ,img :'./images/services/24-hours.png', description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",info:"Easy & Free" },
    { id: 4 ,name : "SECURED PAYMENT" ,img :'./images/services/credit-card.png', description:"Contrary to popular belief, Lorem Ipsum is not simply random text.",info:"Safe & Fast" }]
    return(
        <section className="services-block space">
            <div className="container">
                <div className="services-list">
                 {Service.map((item) => <ServicesList key ={item.id} name={item.name} img={item.img} description={item.description}/>)}
                </div>
            </div>    
        </section>
    );
}
export default ServicesBlock;