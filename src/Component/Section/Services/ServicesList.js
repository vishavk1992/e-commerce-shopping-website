function ServicesList(props){
    return(

<div className="services-info">
    <img src={props.img} alt="service" />
    <h4>{props.name}</h4>
    <p>{props.description}</p>
</div>

);
}
export default ServicesList;