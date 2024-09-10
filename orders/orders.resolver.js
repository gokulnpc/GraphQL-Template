const ordersModel = require("./orders.model");

const resolvers = {
  Query: {
    orders: () => ordersModel.getAllOrders(),
  },
};

module.exports = resolvers;
