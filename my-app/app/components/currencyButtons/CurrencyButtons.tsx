import React from 'react';

type CurrencyItem = {
  currency: string;
  icon: string;
  vector: string;
  price: number;
  trend: number;
};

type Props = {
  items?: CurrencyItem[];
};

//Takes in an array of currency items and displays them as buttons/cards/pills
export default function CurrencyButtons({ items = [] }: Props) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="currency-buttons-list df-ac-jc">
      {items.map((item, idx) => (
        <div key={(item.currency ?? idx) as React.Key} className="currency-button df-ac-jc">
          <div className="currency-button-left df-ac-jc">
            <img className="currency-button-icon" src={item.icon} alt={`${item.currency} icon`} />
            <p className="currency-button-text">{item.currency}</p>
            <img className="currency-button-vector" src={item.vector} alt={`${item.currency} vector`} />
          </div>
          <div>
            <p className="currency-button-price">{item.price}</p>
            <p className="currency-button-trend">{item.trend}</p>
          </div>
        </div>
      ))}
    </div>
  );
}