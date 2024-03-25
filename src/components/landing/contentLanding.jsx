import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import map from "../../assets/mapping.png";

function Content() { 
  return (
    <>
      <div className="m-10">
        <div className="flex items-center space-x-12">
          <div>
            <img src={img1} alt="people in group" className="h-[80vh]" />
          </div>
          <div>
            <p className="text-4xl font-extrabold">Event Hive:</p>
            <p className="text-3xl font-semibold">
              One Stop Destination for Event Exploration and Ticket Booking
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-7 h-screen">
          <div>
            <img src={img2} alt="explore " className="h-[80vh]" />
          </div>
          <div className="relative w-[40vw] flex justify-end">
            <div className="absolute top-1/3 w-[450px] left-0">
              <p className="text-3xl font-semibold">
                Find All the happening Events Close to you!
              </p>
            </div>
            <div>
              <img src={map} alt="" className="h-[50vh]"/>
            </div>
          </div>
        </div>
        <div className="flex items-center  space-x-16 h-screen ">
          <div>
            <p className="text-3xl font-semibold ml-[90px]">
              Seamless Payment For Your Event Tickets!
            </p>
          </div>
          <div>
            <img src={img3} alt="payment" className="h-[80vh]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
