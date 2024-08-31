"use client";

import { Tabs } from "antd";
import React, { useState } from "react";
// import { AutoComplete } from "antd";

const BannedCards = () => {
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
      <div className="banned-cards">
        <div className="container">
          <h1>Cartas banneadas</h1>
          <div className="banned-cards-tab">
            <Tabs
              activeKey={activeKey}
              onChange={handleTabChange}
              items={items}
              style={{ overflowX: "auto", whiteSpace: "nowrap" }}
            />
          </div>
          <div className="all-cards">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BannedCards;
