import React, { Fragment, useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    match,
    useRouteMatch,
    matchPath
  } from "react-router-dom";

const Owner = ({ owner }) => {

    return (
        <Fragment>
            Owner Detail
            {owner.fio}
        </Fragment>
    );

}

export default Owner;