import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Group } from '../../types/GroupsTypes';
import { columns } from './TableComponentColumns/TableComponentColumns';

interface TableComponentProps {
  data: Group[];
 }

const onChange: TableProps<Group>['onChange'] = (pagination, filters) => {
  console.log('params', pagination, filters);
};

const TableComponent: React.FC<TableComponentProps> = ({data}) => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default TableComponent;