import React, { Fragment } from "react";

const Owner = ({ owner, match }) => {
    return (
        <Fragment>
            {match.params.id}
            Owner Detail
        </Fragment>
    );

}

export default Owner;