import { useState, useEffect } from 'react';
import ModalUser from '../../components/ModalUser/ModalUser';
import { getAllUsers, deleteUser } from '../../services/webService';

import { Table, message } from 'antd';
import type { TableColumnsType } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import style from './Data.module.scss';

interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
  action: JSX.Element;
}

function Data() {
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'action',
      dataIndex: 'action',
    },
  ];

  const [renderData, setRenderData] = useState<DataType[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [action, setAction] = useState<string>('create');
  const [currEditId, setCurrEditId] = useState<number>(-1);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    const res = getAllUsers();
    if (res.code !== 0) {
      message.error(res.message);
      return;
    }
    const data = res.data.map((dt, index) => {
      return {
        ...dt,
        action: (
          <>
            <button className={style.editBtn} onClick={() => handleShowEditModal(dt.id)}>
              <EditOutlined />
            </button>
            <button className={style.deleteBtn} onClick={() => handleDelete(dt.id)}>
              <DeleteOutlined />
            </button>
          </>
        ),
      };
    });
    setRenderData(data);
  };

  const handleShowAddModal = () => {
    setAction('create');
    setShowModal(true);
  };
  const handleShowEditModal = (id: number) => {
    setAction('edit');
    setCurrEditId(id);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    const res = deleteUser(id);
    if (res.code !== 0) {
      message.error(res.message);
    } else getAllData();
  };

  return (
    <div className={style.data}>
      <ModalUser userId={currEditId} action={action} isShow={showModal} setShow={setShowModal} />
      <button className={style.addBtn} onClick={handleShowAddModal}>
        + Add user
      </button>
      <Table columns={columns} dataSource={renderData} />
    </div>
  );
}

export default Data;
