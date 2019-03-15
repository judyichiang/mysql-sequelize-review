const Todo = require('../database/model');

const controller = {
  get: (req, res) => {
    // todo
    Todo.findAll({}).then( data => {
      res.status(200).send(data);
    })
    //res.send('hello from get');
  },
  post: (req, res) => {
    // todo
    const { name } = req.body;
    Todo.create({name})
      .then((data => {
        res.send(201).send(data); 
      })).catch(err => {
        console.error(err);
      });

  },
  update: (req, res) => {

    const { name } = req.body;
    const { id } = req.params;
    Todo.update({name}, { where: {id} })
      .then( (data) => {
        res.status(202).send(data);
      }).catch( (err) => console.error(err) );

  },
  delete: (req, res) => {
    const { id } = req.params;
    Todo.destroy({ where: { id } })
    .then( (data) => {
      res.status(200).send(`Destroy id ${id}`);
    }).catch( (err) => console.error(err) );
    // todo
    // res.send('hello from delete');
  },
};

module.exports = controller;
