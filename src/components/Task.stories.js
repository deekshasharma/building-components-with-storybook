import React from 'react';
import Task from './Task';

export default {
    component: Task, title: 'Task'
}

const Template = args => <Task {...args}/>

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1123',
        title: 'Default Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2020, 0, 1, 9, 0)
    }
}

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
        title: 'Pinned Task',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
        title: 'Archived Task',
    },
};