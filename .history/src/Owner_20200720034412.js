import React, { Fragment, useState } from "react";


const Owner = ({ owner }) => {

    return (
        <Fragment>
            Owner Detail
            {owner.fio}
        </Fragment>
    );

}

export default Owner;