import { TableColumnsType } from "antd";
import { Group, User } from "../../../types/GroupsTypes";


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
        // {
        //   text: 'Submenu',
        //   value: 'Submenu',
        //   children: [
        //     {
        //       text: 'Green',
        //       value: 'Green',
        //     },
        //     {
        //       text: 'Black',
        //       value: 'Black',
        //     },
        //   ],
        // },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
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
      onFilter: (value: React.Key | boolean, record: Group) =>  {
        if (typeof value === 'string') {
          return (record.avatar_color ?? '').indexOf(value) >= 0;
        } return false;
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
      render: (value: boolean) => value ? 'Closed' : 'Open',
      onFilter: (value: React.Key | boolean, record: Group) => {
        if (typeof value === 'boolean') {
          return record.closed === value;
        }
        // Handle the case where value is not a boolean
        // This might not be necessary if you're sure value will always be a boolean
        return false;
      }
    },
    {
      title: 'Members',
      dataIndex: 'members_count'
    },
    {
      title: 'Friends',
      dataIndex: 'friends',
      render: (friends: User[] | undefined) => friends && friends.length > 0 ? 'Yes' : 'No'
    }
  ];
