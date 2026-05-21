import "./Banner.css";

import { useEffect, useState } from "react";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(!localStorage.getItem("token"));

  useEffect(() => {
    const syncBanner = () => {
      setBannerVisible(!localStorage.getItem("token"));
    };

    syncBanner();
    window.addEventListener("storage", syncBanner);

    return () => {
      window.removeEventListener("storage", syncBanner);
    };
  }, []);

  if (!bannerVisible) {
    return null;
  }

  return (
    <>
      <div className="header-img"></div>

      <div className="welcome-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="welcome-wrapper">
                <h2 className="welcome-title text-uppercase">Welcome To Our Site</h2>
                <img
                  src="./assets/img/welcome-divider-lines.png"
                  alt="Welcome divider"
                  className="welcome-divider-lines-img"
                />
                <p className="welcome-description">
                  Great deals, fast cash, and trusted service. Whether you are
                  buying, selling, or pawning, we are here to give you the best
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
