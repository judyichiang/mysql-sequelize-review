const Todo = require('./model');

const data = [
    {
        name: 'Eat dinner',
    },
    {
        name: 'Eat breakfast',
    },
    {
        name: 'Eat dessert',
    },
    {
        name: 'Eat lunch',
    },
    {
        name: 'Eat snack',
    },
];

Todo
    .sync({ force: false})
    .then( () => {
        Todo.bulkCreate(data)
            .then( () => {console.log('Add in data')});
    });