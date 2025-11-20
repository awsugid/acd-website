import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import indonesiaGeo from "./indonesia.json";

interface UserGroup {
  city: string;
  description: string;
  link: string;
  color: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface IndonesiaMapProps {
  userGroups: UserGroup[];
}

const IndonesiaMap: React.FC<IndonesiaMapProps> = ({ userGroups }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<UserGroup | null>(null);
  const [projConfig, setProjConfig] = useState({
    center: [118, -5] as [number, number],
    scale: 1100
  });

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: Focus on Western Indonesia (Sumatra, Java, Kalimantan) where groups are
        setProjConfig({
          center: [108, -4],
          scale: 1800
        });
      } else {
        // Desktop: Show whole Indonesia
        setProjConfig({
          center: [118, -5],
          scale: 1100
        });
      }
    };

    handleResize(); // Set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={projConfig}
        width={1000}
        height={500}
        className="w-full h-full"
      >
        <ZoomableGroup center={projConfig.center} zoom={1} maxZoom={4} minZoom={1}>
          <Geographies geography={indonesiaGeo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "rgba(255, 255, 255, 0.3)", outline: "none", transition: "all 250ms" },
                    pressed: { outline: "none" }
                  }}
                />
              ))
            }
          </Geographies>

          {userGroups.map((group) => (
            <Marker key={group.city} coordinates={group.coordinates}>
              <g
                className="group cursor-pointer"
                onMouseEnter={() => setTooltipContent(group.city)}
                onMouseLeave={() => setTooltipContent("")}
                onClick={() => setSelectedGroup(group)}
              >
                {/* Glowing effect */}
                <circle
                  r={8}
                  fill="url(#gradient-marker)"
                  className="animate-ping opacity-75"
                  style={{ fill: "currentColor" }} // Fallback
                />
                <circle
                  r={4}
                  className={`fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ${selectedGroup?.city === group.city ? 'stroke-2 stroke-yellow-400' : ''}`}
                />

                {/* Label */}
                <text
                  textAnchor="middle"
                  y={-15}
                  className="font-sans text-[10px] font-bold fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
                  style={{ textShadow: "0px 0px 4px rgba(0,0,0,1)" }}
                >
                  {group.city}
                </text>
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Info Card Overlay */}
      {selectedGroup && (
        <div className="absolute bottom-4 left-4 right-4 md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-72 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/20 rounded-2xl text-white shadow-2xl z-10 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {selectedGroup.city}
            </h3>
            <button
              onClick={() => setSelectedGroup(null)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {selectedGroup.description}
          </p>

          <a
            href={selectedGroup.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 px-4 rounded-xl bg-gradient-to-r ${selectedGroup.color} text-white font-bold text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}
          >
            Visit User Group
          </a>
        </div>
      )}
    </div>
  );
};

export default IndonesiaMap;
