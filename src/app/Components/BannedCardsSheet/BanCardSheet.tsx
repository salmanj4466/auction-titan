"use client";

import { Col, Row, Tabs } from "antd";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BanCardSheet = () => {
  const BannedCardsData = [
    {
      img: "/banned-cards/bannedCardImg1.png",
      number: "The Ancient One",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg2.png",
      number: "Against All Odds",
      tips: "Sourcery",
    },
    {
      img: "/banned-cards/bannedCardImg1.png",
      number: "Etched Host Doombringer",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg1.png",
      number: "Feast or Famine",
      tips: "Instant",
    },
    {
      img: "/banned-cards/bannedCardImg5.png",
      number: "The Ancient One",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg6.png",
      number: "Against All Odds",
      tips: "Sourcery",
    },
    {
      img: "/banned-cards/bannedCardImg7.png",
      number: "Etched Host Doombringer",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg8.png",
      number: "Feast or Famine",
      tips: "Instant",
    },
    {
      img: "/banned-cards/bannedCardImg9.png",
      number: "The Ancient One",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg2.png",
      number: "Against All Odds",
      tips: "Sourcery",
    },
    {
      img: "/banned-cards/bannedCardImg1.png",
      number: "Etched Host Doombringer",
      tips: "Creature",
    },
    {
      img: "/banned-cards/bannedCardImg4.png",
      number: "Feast or Famine",
      tips: "Instant",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
      key: "all",
      label: "Todos los artículos",
    },
    {
      key: "1",
      label: "Artifact",
    },
    {
      key: "2",
      label: "Creature",
    },
    {
      key: "3",
      label: "Tribal",
    },
    {
      key: "4",
      label: "Instant",
    },
    {
      key: "5",
      label: "Enchantment",
    },
    {
      key: "6",
      label: "Land",
    },
    {
      key: "7",
      label: "Sorceries",
    },
    {
      key: "8",
      label: "Vanguard",
    },
    {
      key: "9",
      label: "Planeswalker",
    },
    {
      key: "10",
      label: "Battle",
    },
    {
      key: "11",
      label: "Dungeon",
    },
  ];

  const [activeKey, setActiveKey] = useState<string>("all");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <div className="banned-cards-sheet">
        <div className="container">
          <h1>Cartas banneadas</h1>
          <div className="banned-cards-tab">
            <Tabs
              defaultActiveKey="all"
              items={items}
              onChange={handleTabChange}
            />
          </div>

          <div className="details">
            <Row gutter={[40, 16]}>
              <Col span={8}>
                <img src="/banned-cards/bannedCardImg3.png" alt="" />
              </Col>
              <Col span={16}>
                <div className="content">
                  <div className="info">
                    <p>Nombre:</p>
                    <p>Feast or Famine</p>
                  </div>
                  <div className="info">
                    <p>Tipo:</p>
                    <p>Instant</p>
                  </div>
                  <div className="info">
                    <p style={{ width: "160px" }}>Descripción:</p>
                    <p>
                      Choose one - Put a 2/2 black Zombie creature token onto
                      the battlefield or destroy target nonartifact, nonblack
                      creature and it cant be regenerated.
                    </p>
                  </div>
                  <div className="info">
                    <p>Flavor:</p>
                    <p>
                      "The living cannot understand the benefits of death."{" "}
                      <br />
                      -Chaeska, Keeper of Tresserhorn
                    </p>
                  </div>
                  <div className="info">
                    <p>Artista:</p>
                    <p>Chase Stone</p>
                  </div>
                  <div className="info">
                    <p>Edición:</p>
                    <p>Wizards of the Coast</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* banned-cards-slider  */}
        <div className="banned-card-slider">
          <h2>Otras tarjetas banneadas</h2>

          <div className="all-ban-cards">
            <Carousel responsive={responsive}>
              {BannedCardsData.map((el) => (
                <div className="single-card">
                  <img src={el.img} alt="" />
                  <p>
                    Nombre: <span>{el.number}</span>
                  </p>
                  <p>
                    Tipo: <span>{el.tips}</span>
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default BanCardSheet;
