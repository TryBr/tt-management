import React, { Fragment } from "react";
import {
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  
const Owner = ({ owner, match }) => {

    console.log(match);

    return (
        <Fragment>
            {/* <h3>ID: {match.params.id}</h3> */}
            Owner Detail
        </Fragment>
    );

}

export default Owner;