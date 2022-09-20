/* eslint-disable no-unused-vars */
import React, { memo } from "react";

import { Link } from "react-router-dom";

import { Card } from "./styles";

function CardService({ Information }) {
  return (
    <Card>
      <Link to={`${Information.serviceLink}/${Information.idService}`}>
        <img
          src={Information.img}
          alt={Information.nameService}
          loading="lazy"
        />
      </Link>

      <div>
        <h3>{Information.nameService}</h3>
        <p>R${Information.price}</p>
      </div>
    </Card>
  );
}

export default memo(CardService);
