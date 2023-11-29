import React from "react";
import { Link } from "react-router-dom";
import { IconLogin } from "../icons/IconLogin";
import { Tooltip } from "react-tooltip";

export const BtnLogin = () => {
  return (
    <>
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Iniciar sección"
        to="/login"
      >
        <IconLogin />
      </Link>

      <Tooltip id="my-tooltip" />
    </>
  );
};
