import React, { Fragment } from "react";

import { Progress, PageHeader, Select, Row, Col , 
    Steps, Comment, Avatar, Form, Button, List, Input, Table, Tabs } from 'antd';

import {
    useParams
  } from "react-router-dom";

const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z" fill="#272F5A"/>
    </svg>
);

const OwnerEdit = ({ owner }) => {

    let { id } = useParams();

    return (
        <div className="owner-detail">
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Назад"
                backIcon={<BackIcon />}
            />
            <h1 className="page-title">Редактирование</h1>
            
        </div>
    );

}

export default OwnerEdit;