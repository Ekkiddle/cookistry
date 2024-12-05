import React from "react";
import { LuVegan, LuMilkOff } from "react-icons/lu"; // Vegan and Lactose-Free icons
import { PiGrainsSlash } from "react-icons/pi"; // Gluten-Free icon
import { IoMdFlame } from "react-icons/io"; // Spicy icon

const Icon = ({ type }) => {
  // Define available icons and their labels
  const icons = {
    vegan: {
      icon: <LuVegan className="text-sm text-gray-500" />,
      label: "Vegan",
    },
    glutenFree: {
      icon: <PiGrainsSlash className="text-sm text-gray-500" />,
      label: "Gluten-Free",
    },
    lactoseFree: {
      icon: <LuMilkOff className="text-sm text-gray-500" />,
      label: "Lactose-Free",
    },
    spice: {
      icon: <IoMdFlame className="text-sm text-gray-500" />,
      label: "Spicy",
    },
  };

  // Ensure the provided type is valid
  const iconData = icons[type];

  if (!iconData) {
    return null; // Return null if no matching icon is found
  }

  return (
    <div className="relative group inline-block">
      {/* Render Icon */}
      <div className="cursor-pointer">{iconData.icon}</div>

      {/* Tooltip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden w-max rounded bg-gray-800 px-3 py-1 text-xs text-white opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
        {iconData.label}
      </div>
    </div>
  );
};

export default Icon;
