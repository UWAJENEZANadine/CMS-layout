import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Layout, Menu, theme } from "antd";
import { Space, Table, Tag } from "antd";
import "../css/BlogList.css";


const { Header, Sider, Content } = Layout;

const dataSource = [
  {
    key: "1",
    name: "Keza",
    age: 32,
    address: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    key: "2",
    name: "Alice",
    age: 42,
    address: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    key: "3",
    name: "Tessy",
    age: 32,
    address: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
 
];

const columns = [
  {
    
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Dashboad = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{ height: "100vh" }}>
        <div className="logo" style={{ padding: "2rem" }}>
          <img
            src="data:image/jpeg;base64,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"
            style={{ width: "30%", height: "30%", borderRadius: "50%" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboad",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "BlogList",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Log out",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 style={{ fontSize: "1.5rem", padding: "1rem" }}>
            Dashboad <span style={{ marginLeft: "70rem" }}>Profile</span>
          </h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false} className="card">
                <h1
                  style={{
                    lineHeight: "5rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  Card 1
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  accusantium unde esse. Repellat quo autem nihil eos voluptatem
                  odit, a ullam libero necessitatibus culpa suscipit est neque.
                  Consectetur, error harum!
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} className="card">
                {" "}
                <h1
                  style={{
                    lineHeight: "5rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  Card 2
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  accusantium unde esse. Repellat quo autem nihil eos voluptatem
                  odit, a ullam libero necessitatibus culpa suscipit est neque.
                  Consectetur, error harum!
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} className="card">
                {" "}
                <h1
                  style={{
                    lineHeight: "5rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  Card 3
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  accusantium unde esse. Repellat quo autem nihil eos voluptatem
                  odit, a ullam libero necessitatibus culpa suscipit est neque.
                  Consectetur, error harum!
                </p>
              </Card>
            </Col>
          </Row>
          <Table dataSource={dataSource} columns={columns} className="table" />;
        </Content>
        <h1 className="copyrigt-footer">&copy; Copyright 2023</h1>
      </Layout>
    </Layout>
  );
};

export default Dashboad;
