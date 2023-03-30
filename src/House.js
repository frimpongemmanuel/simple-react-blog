import hous1 from './images/house1.jpg'
import hous2 from './images/house2.jpg'
import hous3 from './images/house3.jpg'

const House = () => {
    return ( 
     <div className="House">
        <div className="housestart">
            <h1>House is just a building </h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ab error quisquam magnam et impedit autem? Velit est, 
            debitis deserunt amet quidem doloremque, fugiat reiciendis sint 
            reprehenderit at, officiis itaque maxime.
            </p>
            
        </div>
        <div className="housemore">
            <h2>Lord have mercy</h2>
           <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ab error quisquam magnam et impedit autem? Velit est, 
            debitis deserunt amet quidem doloremque, fugiat reiciendis sint 
            reprehenderit at, officiis itaque maxime.
            </p>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ab error quisquam magnam et impedit autem? Velit est, 
            debitis deserunt amet quidem doloremque, fugiat reiciendis sint 
            reprehenderit at, officiis itaque maxime.
            </p>
        </div>
        <div className="houseabout">
            <img src={hous1} alt="" />
            <img src={hous2} alt="" />
            <img src={hous3} alt="" />
           
        </div>
     </div>
     );
}
 
export default House;