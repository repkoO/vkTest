import React from 'react';
import { Table } from 'antd';
import { Group } from '../../types/GroupsTypes';
import { columns } from './TableComponentColumns/TableComponentColumns';

interface TableComponentProps {
  data: Group[];
 }

const TableComponent: React.FC<TableComponentProps> = ({data}) => {
  const expandedRowRender = (record: Group) => {
    if (record.friends && record.friends.length > 0) {
      return (
        <div style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: '200px'
          }
        }>
          {record.friends.map((friend, index) => (
            <div key={index}>
              {friend.first_name} {friend.last_name}
            </div>
          ))}
        </div>
      );
    } else {
      return <div
        style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: '200px'
          }
        }>
          No friends to display.
              </div>;
    }
  };

  return (
  <Table
    rowKey='id'
    columns={columns}
    dataSource={data}
    expandable={{
      expandedRowRender
    }}
  />)
}


export default TableComponent;