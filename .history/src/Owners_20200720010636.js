import React, { Component, Fragment } from "react";

import {
  Layout,
  Progress,
  PageHeader,
  Select,
  Row,
  Col,
  Steps,
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Table,
  Tag,
  Space,
} from "antd";

const AddIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3H10.5V10.5H3V13.5H10.5V21H13.5V13.5H21V10.5H13.5V3Z" fill="#272F5A"/>
        </svg> 
);

export default class Owners extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="page-title">Собственники</h1>
        <Button type="default" className="button-add" size="middle" icon={<AddIcon />}></Button>
      </Fragment>
    );
  }
}
