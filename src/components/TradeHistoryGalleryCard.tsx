import React from 'react';
import TradeHistoryGallery from './TradeHistoryGallery';
import { TradeHistoryImages } from '../data/projects';

const TradeHistoryGalleryCard: React.FC = () => {
  const tradeHistoryImages = TradeHistoryImages;

  return (
    <div className="min-h-screen bg-gray-800">
      <TradeHistoryGallery images={tradeHistoryImages} />
    </div>
  );
};

export default TradeHistoryGalleryCard;
