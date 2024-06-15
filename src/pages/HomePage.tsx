import MobileApplicatoinImage from "../assets/MobileApplication.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ReactTyped } from "react-typed";
import appDownloadImage from "../assets/appDownload.png"
import foodie from "../assets/Foodie.png"
function HomePage() {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,

    });
  }

  return (
    <div className="flex flex-col gap-12">

      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "md:px-3 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center bg-white border-2 border-purple-600 animate__animated animate__wobble" : "md:px-3 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center bg-white border-2 border-purple-600"}>
            <h1 className="text-5xl font-bold tracking-tight text-purple-600 animate-bounce">
              HUNGRY!!! Order Now
            </h1>
            <span className="text-red-600">
              <ReactTyped
                className="text-4xl font-Playwrite font-bold"
                strings={["Your Favourite", "Delicious Meals", "Are Just A", "Click Away!"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </span>
            <SearchBar placeHolder="Search By City" onSubmit={handleSearchSubmit} />
          </div>
        )}
      </TrackVisibility>
      <div className="grid md:grid-cols-2 gap-10">

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="flex justify-center items-center pt-12 py-10">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__flip" : ""}>

                  <img src={foodie} className="max-h-80 animate-bounce" />
                </div>
              )}
            </TrackVisibility>
          </span>
          <span className="font-bold text-3xl tracking-tighter font-poppins text-purple-600 font">
            Get Your Meal Even Faster!
          </span>
          <span className="font-poppins">
            Download the HeyFoodie App for faster ordering and personalised
            recommendations
          </span>
          <div className="aspect-video h-20">
            <img src={appDownloadImage} />
          </div>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>

              <img src={MobileApplicatoinImage} className="h-90" />
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
}

export default HomePage;
