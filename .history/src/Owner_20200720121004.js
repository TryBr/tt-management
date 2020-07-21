import React, { Fragment } from "react";

import { Progress, PageHeader, Select, Row, Col , 
    Steps, Comment, Avatar, Form, Button, List, Input, Table } from 'antd';

import {
    useParams
  } from "react-router-dom";

const Owner = ({ owner }) => {

    let { id } = useParams();

    return (
        <Fragment>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Назад"
                backIcon={<BackIcon />}
            />
            <h1 className="page-title">Назначить сотрудника для проведения внеплановой проверки</h1>
            Owner Detail: {id}
        </Fragment>
    );

}

export default Owner;