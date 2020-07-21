import React, { Fragment } from "react";

const Owner = ({ owner, match }) => {

    console.log(owner);

    return (
        <Fragment>
            <h3>ID: {match.params.id}</h3>
            Owner Detail
        </Fragment>
    );

}

export default Owner;