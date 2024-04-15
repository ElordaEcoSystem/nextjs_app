import React from "react";
import { PERFORM_ICONS } from "./constans";
import { PerformArch } from "../../../components/icons/PerformArch";
import { PerformSteam } from "../../../components/icons/PerformSteam";
import { PerformClear } from "../../../components/icons/PerformClear";
import { PerformPump } from "../../../components/icons/PerformPump";
import { PerformWash } from "../../../components/icons/PerformWash";

export const PerformIcon = ({ icon, className }) => {
  const Icon =
    {
      [PERFORM_ICONS.STEAM]: PerformSteam,
      [PERFORM_ICONS.ARCH]: PerformArch,
      [PERFORM_ICONS.CLEAR]: PerformClear,
      [PERFORM_ICONS.PUMP]: PerformPump,
      [PERFORM_ICONS.WASH]: PerformWash,
    }[icon] ?? PerformSteam;

  return (
    <>
      <Icon className={className} />
    </>
  );
};
