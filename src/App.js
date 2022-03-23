import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    {
      id: Math.random(),
      label: 'Description du produit',
      content: (
        <div>
          <p>
            J'ai selectionné un chat par ce que c'était plus drôle comme ça
          </p>
        </div>
      ),
    },
    {
      id: Math.random(),
      label: 'Images',
      content: (
        <div>
          <img
            src="https://www.i-cad.fr/uploads/5bec27af5afec.jpeg"
            alt="ESC 4 en 1"
          />
        </div>
      ),
    },
    {
      id: Math.random(),
      label: 'Commentaires',
      content: (
        <div>
          <ul>
            <li>Super produit !</li>
            <li>Livraison rapide, belle finition.</li>
            <li>Un animal qui a fait ses preuves.</li>
          </ul>
        </div>
      ),
    },
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Wrapper">
      <ul className="Tabs">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className="Tab"
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className="ActiveTabContent">{activeTab.content}</div>
    </div>
  );
};

export default Tabs;
