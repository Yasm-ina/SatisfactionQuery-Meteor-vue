import { Mongo } from 'meteor/mongo';
const UsersCollections = new Mongo.Collection('users');

export default UsersCollections