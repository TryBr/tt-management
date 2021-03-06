import React from "react";

import { PageHeader, Row, Col, Form, Button, Input, Select } from "antd";

import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";

const { Option } = Select;

const BackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.5 3.49994C9.77614 3.2238 10.2239 3.2238 10.5 3.49994C10.7761 3.77608 10.7761 4.2238 10.5 4.49994L7 7.99994L10.5 11.4999C10.7761 11.7761 10.7761 12.2238 10.5 12.4999C10.2239 12.7761 9.77614 12.7761 9.5 12.4999L5 7.99994L9.5 3.49994Z"
      fill="#272F5A"
    />
  </svg>
);

const OwnerEdit = ({ owner, onOwnEdit }) => {
  let { id } = useParams();
  const history = useHistory();

  const onFinish = (data) => {
    onOwnEdit(data, id);
    history.push("/owners");
  };

  return (
    <div className="owner-detail">
      <Link to={`/owners/${id}`}>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Назад"
          backIcon={<BackIcon />}
        />
      </Link>
      <h1 className="page-title">{owner[id].fio} Редактирование</h1>

      <Row>
        <Col span={12}>
          <Form layout={"vertical"} size={"middle"} onFinish={onFinish}>
            <Form.Item name="id" initialValue={owner[id].id} hidden="true">
              <Input />
            </Form.Item>
            <Form.Item label="Фамилия" name="fio" initialValue={owner[id].fio}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Адрес"
              name="address"
              initialValue={owner[id].address}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Индекс" name="post" initialValue={owner[id].post}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Контактный телефон"
              name="phone"
              initialValue={owner[id].phone}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Электронная почта"
              name="email"
              initialValue={owner[id].email}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Юридическая форма"
              name="legalForm"
              initialValue={owner[id].legalForm}
            >
              <Select defaultValue={owner[id].legalForm}>
                <Option value="Физическое лицо">Физическое лицо</Option>
                <Option value="Юридическое лицо">Юридическое лицо</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Платежный код"
              name="payCode"
              initialValue={owner[id].payCode}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Статус собственника"
              name="ownStatus"
              initialValue={owner[id].ownStatus}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Вид рассчета"
              name="payType"
              initialValue={owner[id].payType}
            >
              <Select defaultValue={owner[id].payType}>
                <Option value="По ИПу">По ИПу</Option>
                <Option value="Наличные">Наличные</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Номер лицевого счета"
              name="accountNumber"
              initialValue={owner[id].accountNumber}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
              <Link to={`/owners/${id}`}>
                <Button type="default">Отмена</Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default OwnerEdit;
