import React, { Fragment } from "react";

import {
    useParams,
    useRouteMatch
  } from "react-router-dom";

const Owner = ({ owner, match }) => {

    let { path, url } = useRouteMatch();
    let { ownerId } = useParams();

    return (
        <Fragment>
            Owner Detail: {url}
        </Fragment>
    );

}

export default Owner;