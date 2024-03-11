import { TableColumnsType, Tag } from "antd";
import { Group } from "../../../types/GroupsTypes";
import { Table } from 'antd';

 export const columns: TableColumnsType<Group> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Котики',
          value: 'Котики',
        },
        {
          text: 'Собачки',
          value: 'Собачки',
        },
        {
          text: 'Бабочки',
          value: 'Бабочки',
        },
        {
          text: 'Утята',
          value: 'Утята',
        },
        {
          text: 'Мишки',
          value: 'Мишки',
        },
        {
          text: 'Улитки',
          value: 'Улитки',
        },
        {
          text: 'Выдры',
          value: 'Выдры',
        },
        {
          text: 'Зайки',
          value: 'Зайки',
        },
        {
          text: 'Кролики',
          value: 'Кролики',
        },
        {
          text: 'Куропатки',
          value: 'Куропатки',
        },
        {
          text: 'Козлики',
          value: 'Козлики',
        },
        {
          text: 'Тигры',
          value: 'Тигры',
        },
        {
          text: 'Птички',
          value: 'Птички',
        }
      ],
      onFilter: (value, record: Group) => {
        if (typeof value === 'string') {
          return record.name.indexOf(value) === 0;
        }
        return false;
      },
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar_color',
      filters: [
        {
          text: 'red',
          value: 'red',
        },
        {
          text: 'green',
          value: 'green',
        },
        {
          text: 'yellow',
          value: 'yellow',
        },
        {
          text: 'blue',
          value: 'blue',
        },
        {
          text: 'purple',
          value: 'purple',
        },
        {
          text: 'white',
          value: 'white',
        },
      ],
      render: (avatarColor: string, record: Group) => {
        const circleStyle = {
            width: '50px',
            height: '50px',
            borderRadius: '100px',
            border: '1px solid grey',
            backgroundColor: avatarColor,
        };
        return record.avatar_color ? <div style={circleStyle}></div> : null;
    },
      onFilter: (value: React.Key | boolean, record: Group) =>  {
        if (typeof value === 'string') {
          return (record.avatar_color || '').indexOf(value) === 0;
        }
        return false;
      }
    },
    {
      title: 'Private Title',
      dataIndex: 'closed',
      filters: [
        {
          text: 'Open',
          value: false,
        },
        {
          text: 'Closed',
          value: true,
        },
      ],
      render: (value: boolean) => !value ? 'Open' : 'Closed',
      onFilter: (value: React.Key | boolean, record: Group) => record.closed == value,
    },
    {
      title: 'Members',
      dataIndex: 'members_count'
    },
    {
      title: 'Friends',
      dataIndex: 'friends',
      filters: [
        {
          text: '3',
          value: '3',
        },
        {
          text: '2',
          value: '2',
        },
        {
          text: '1',
          value: '1',
        },
        {
          text: '0',
          value: '0',
        }
      ],
      render: (friends: Group[] | undefined) => {
        return friends && friends.length > 0 ? (
          <Tag color="green">
            {friends.length}
          </Tag>
        ) : (
          <Tag color="red">
            0
          </Tag>
        );
      },
      onFilter: (value, record: Group) =>  record.friends?.length === Number(value)
    },
    Table.EXPAND_COLUMN,
  ];