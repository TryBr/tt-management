import React, { Component, Fragment } from "react";

import {
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

const { Option } = Select;

const AddIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3H10.5V10.5H3V13.5H10.5V21H13.5V13.5H21V10.5H13.5V3Z" fill="#272F5A"/>
        </svg> 
);

const FilterIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5C3 3.22386 3.22386 3 3.5 3H12.5C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H3.5C3.22386 4 3 3.77614 3 3.5ZM2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4C14 4.37855 13.7897 4.70797 13.4795 4.87776C13.2034 5.0289 12.8889 5.14819 12.7 5.4L10 9L9.99998 12.8604L6 14L5.99998 9L3.3 5.4C3.11115 5.1482 2.79661 5.0289 2.52051 4.87776C2.21034 4.70797 2 4.37855 2 4V3ZM4.375 5L6.99998 8.5V12.5L8.99998 12V8.5L11.625 5H4.375Z" fill="#272F5A"/>
        </svg>
);

const SearchInputIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7ZM10.2767 10.7767C9.3992 11.5388 8.25346 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.25346 11.5388 9.3992 10.7767 10.2767L11.5 11H12L14 13C14.2761 13.2761 14.2761 13.7239 14 14C13.7239 14.2761 13.2761 14.2761 13 14L11 12V11.5L10.2767 10.7767Z" fill="#272F5A" fill-opacity="0.6"/>
        </svg>
);

const SelectIconPrefix = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6.5C3.22386 6.22386 3.22386 5.77614 3.5 5.5C3.77614 5.22386 4.22386 5.22386 4.5 5.5L8 9L11.5 5.5C11.7761 5.22386 12.2239 5.22386 12.5 5.5C12.7761 5.77614 12.7761 6.22386 12.5 6.5L8 11L3.5 6.5Z" fill="#272F5A"/>
        </svg>
);

export default class Owners extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="page-title">Собственники</h1>
        <Button type="default" className="button-add" icon={<AddIcon />}></Button>
        <div className="search-panel">
                <Row>
                        <Col span={1}>
                                <Button type="default" icon={<FilterIcon />}></Button>
                        </Col>
                        <Col span={16}>
                                <Input placeholder="Введите ФИО собственника, адрес квартиры или лицевой счет" prefix={<SearchInputIcon />} />
                        </Col>
                        <Col span={5}>
                        <Select defaultValue="abc" suffixIcon={ <SelectIconPrefix /> }>
                                <Option value="abc">Алфавиту</Option>
                                <Option value="noabc">Не алфавиту</Option>
                        </Select>
                        </Col>
                </Row>
        </div>
      </Fragment>
    );
  }
}
