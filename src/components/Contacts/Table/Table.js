import React, { useState } from "react";

import { Table, Button, Space } from "antd";

const TableContact = () => {
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  state.sortedInfo = state.sortedInfo || {};
  state.filteredInfo = state.filteredInfo || {};

  const getLocalContacts = JSON.parse(localStorage.getItem("Contacts"));

  const getResult = getLocalContacts.results;

  const dataNew = getResult.map((item, index) => {
    return {
      key: index++,
      name: `${item.name.title} ${item.name.first} ${item.name.last}`,
      age: item.dob.age,
      address: `${item.location.country} ${item.location.street.number}
        ${item.location.street.name} ${item.location.city}
        ${item.location.postcode}`,
      gender: item.gender,
      email: item.email,
      phone: item.phone,
      nat: item.nat,
      registeredDate: item.registered.date.slice(0, 10),
      dob: item.dob.date.slice(0, 10),
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
      filteredValue: state.filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder:
        state.sortedInfo.columnKey === "name" && state.sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filteredValue: state.filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder:
        state.sortedInfo.columnKey === "address" && state.sortedInfo.order,
      ellipsis: true,
    },

    {
      title: "Nationality",
      dataIndex: "nat",
    },
    {
      title: "Registered Date",
      dataIndex: "registeredDate",
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={() => clearFilters()}>Clear filters</Button>
        <Button onClick={() => clearAll()}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={dataNew} onChange={handleChange} />
    </>
  );
};

export default TableContact;
