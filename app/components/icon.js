import React from "react";
import { LuVegan, LuMilkOff } from "react-icons/lu"; // For Vegan and Lactose-Free icons
import { PiGrainsSlash } from "react-icons/pi"; // For Gluten-Free icon
import { IoMdFlame } from "react-icons/io"; // For Spice icon

const Icon = ({ type }) => {
  // Define the icons and their meanings
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

  // Get the current icon details
  const icon = icons[type];

  if (!icon) {
    return null; // Return null if the type is invalid
  }

  return (
    <div className="relative group inline-block">
      {/* Icon */}
      <div className="cursor-pointer">{icon.icon}</div>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden w-max rounded bg-gray-800 px-3 py-1 text-xs text-white opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
        {icon.label}
      </div>
    </div>
  );
};

export default Icon;
