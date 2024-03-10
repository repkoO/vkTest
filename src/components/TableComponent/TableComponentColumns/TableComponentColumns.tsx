import { TableColumnsType } from "antd";
import { Group } from "../../../types/GroupsTypes";


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
          value: true,
        },
        {
          text: 'Closed',
          value: false,
        },
      ],
      render: (value: boolean) => value ? 'Closed' : 'Open',
      onFilter: (value: React.Key | boolean, record: Group) => {
        if (typeof value === 'boolean') {
          return record.closed === value;
        }
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
      filters: [
        {
          text: 'Yes',
          value: 'Yes',
        },
        {
          text: 'No',
          value: 'No',
        }
      ],
      render: (friends: Group[] | undefined) => friends && friends.length > 0 ? 'Yes' : 'No',
      onFilter: (value, record: Group) => {
        if (typeof value === 'string') {
          // Convert the filter value to a boolean
          const hasFriends = value === 'Yes';
          // Check if the group has friends based on the filter value
          return hasFriends === ((record.friends?.length ?? 0) > 0);
       }
       return false;
      },
    }
  ];
