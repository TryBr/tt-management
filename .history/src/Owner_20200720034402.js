import React, { Fragment, useState } from "react";


const Owner = ({ owner }) => {

    return (
        <Fragment>
            Owner Detail
            {owner.title}
        </Fragment>
    );

}

export default Owner;