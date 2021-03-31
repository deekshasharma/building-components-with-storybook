import React from 'react';

import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: TaskList,
    title: 'TaskList Stories',
}

const Template = args => <TaskList {...args}/>

export const Default = Template.bind({});
Default.args = {
    tasks:[
        {...TaskStories.Default.args.task,id: '1', title: 'My First Task'},
        {...TaskStories.Default.args.task,id: '2', title: 'My Second Task'},
        {...TaskStories.Default.args.task,id: '3', title: 'My Third Task'},
        {...TaskStories.Default.args.task,id: '4', title: 'My Fourth Task'},
        {...TaskStories.Default.args.task,id: '5', title: 'My Fifth Task'},
        {...TaskStories.Default.args.task,id: '6', title: 'My Sixth Task'}
    ]
}

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args, loading: false
}
