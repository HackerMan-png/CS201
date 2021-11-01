// login function retuns a json with success

// dashboard function returns a json with success

const login = async (req, res) => {
  res.json({ status: 200, msg: 'Success' });
};

const dashboard = async (req, res) => {
  res.json({ status: 200, msg: 'Success' });
};

module.exports = { login, dashboard };
