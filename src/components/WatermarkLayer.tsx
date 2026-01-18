import React from "react";

const assetBase = import.meta.env.BASE_URL || "/";
const watermarkUrl = `${assetBase}watermark.png`;

const WatermarkLayer: React.FC = () => {
  return (
    <div className="watermark-layer" aria-hidden="true">
      <img src={watermarkUrl} alt="" />
    </div>
  );
};

export default WatermarkLayer;
