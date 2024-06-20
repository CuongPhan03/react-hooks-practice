import { memo, useState } from 'react';
import { Modal, Input } from 'antd';

import { editUser } from '../../services/webService';

interface Props {
  userId?: number;
  action: string;
  isShow: boolean;
  setShow: (value: boolean) => void;
}

const ModalUser = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();
  const [address, setAddress] = useState<string>('');

  const handleOk = () => {
    props.setShow(false);
  };

  const handleCancel = () => {
    props.setShow(false);
    setName('');
    setAge(0);
    setAddress('');
  };

  return (
    <Modal
      title={props.action === 'create' ? 'Add new user' : 'Edit user'}
      open={props.isShow}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Age"
        value={age}
        onChange={(e) => {
          setAge(parseInt(e.target.value));
        }}
      />
      <Input
        placeholder="Adress"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
    </Modal>
  );
};

export default memo(ModalUser);
