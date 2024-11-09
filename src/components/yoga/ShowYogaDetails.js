import { useLocation } from "react-router-dom";
import starGenerate from "../product/GenerateRating";

function ShowYogaDetails() {
  const location = useLocation();
  const yoga = location.state.yoga;
  console.log(yoga.detailedDescription);
  function getYouTubeVideoId(url) {
    // Match YouTube URL formats: https://www.youtube.com/watch?v=VIDEO_ID
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
    return match && match[1] ? match[1] : '';
  }


  return (
    <>
      <div className="container-fluid p-3 my-5">
        <div className="row position-relative">
          <div className="position-fixed-top col-md-5 d-flex justify-content-center align-items-center p-3">
            <div className="m-2">
              <div className="p-1">
                <iframe
                  width="520"
                  height="345"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(yoga.videoUrl)}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="m-2">
              <div className="p-1">
              <span className="card-text text-start d-block pt-2 my-2">{starGenerate(5)}</span>
                <h5>What is {yoga.yogaName}</h5>
                <p>{yoga.Description}</p>
                <h5>Instruction:</h5>
                <p>{yoga.instructions}</p>
                <h5>Benefits:</h5>
                {yoga.benefits.map((dene, index) => (
                  <p key={index}>
                    {index + 1}. {dene}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowYogaDetails;
