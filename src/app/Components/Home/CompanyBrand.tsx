import Marquee from "react-fast-marquee";

const CompanyBrands = () => {
  const logo = [
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
    {
      img1: "/brands-logo/logo1.png",
      img2: "/brands-logo/logo2.png",
    },
  ];

  return (
    <>
      <div className="company-brands">
        <Marquee>
          {logo.map((elm) => (
            <div className="logos">
              <img src={elm.img1} alt="" />
              <img src={elm.img2} alt="" className="mt-5" />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default CompanyBrands;
