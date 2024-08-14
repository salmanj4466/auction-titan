import Link from "next/link";
import React from "react";

const PastEventPage = () => {
  const pastEventData = [
    {
      img: "/past-events/past-event1.png",
      title: "11 de abril de 2024",
    },
    {
      img: "/past-events/past-event2.png",
      title: "19 de abril de 2024",
    },
    {
      img: "/past-events/past-event3.png",
      title: "6 de mayo de 2024",
    },
    {
      img: "/past-events/past-event4.png",
      title: "18 de mayo de 2024",
    },
    {
      img: "/past-events/past-event5.png",
      title: "2 de junio de 2024",
    },
    {
      img: "/past-events/past-event1.png",
      title: "17 de junio de 2024",
    },
  ];

  return (
    <>
      <div className="container past-events">
        <h1> eventos pasados </h1>
        <div className="past-event-cards">
          {pastEventData.map((el) => (
            <div className="single-card">
              <img src="/past-events/top.png" alt="" className="top" />
              <img src={el.img} alt="" className="img" />
              <h3> {el.title} </h3>
              <Link href="" className="btn-outline-shadow">
                Ver galería
              </Link>
              <img src="/past-events/bottom.png" alt="" className="bottom" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PastEventPage;
