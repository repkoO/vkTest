import React from 'react';
import { Table } from 'antd';
import { Group } from '../../types/GroupsTypes';
import { columns } from './TableComponentColumns/TableComponentColumns';

interface TableComponentProps {
  data: Group[];
 }

const TableComponent: React.FC<TableComponentProps> = ({data}) => <Table rowKey='id' columns={columns} dataSource={data}/>;

export default TableComponent;