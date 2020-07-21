import React, { Fragment } from "react";

import {
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Owner = ({ owner }) => {

    let { id } = useParams();

    return (
        <Fragment>
            Owner Detail: {id}
        </Fragment>
    );

}

export default Owner;