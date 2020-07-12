const graphql = require('graphql');
const _ = require("lodash")
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema}= graphql;

const users=[
  {id: "30", name: "Dhwani", age: 30},
  {id: "40", name: "Sharvil", age: 25}]

const UserType = new GraphQLObjectType({
  name: 'User',
   fields:{
     id: {type: GraphQLString },
     name: {type: GraphQLString} ,
     age: {type: GraphQLInt}
   }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields:{
    User: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args){
        return _.find(users, {id: args.id})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})