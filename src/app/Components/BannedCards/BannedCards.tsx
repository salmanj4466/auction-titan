"use client";

import { Tabs } from "antd";
import React, { useState } from "react";

const BannedCards = () => {
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
      <div className="banned-cards-tab">
        <Tabs defaultActiveKey="all" items={items} onChange={handleTabChange} />
      </div>
    </>
  );
};

export default BannedCards;
