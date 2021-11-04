const React = require('react');
// 适配器
const Enzyme = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
Enzyme.configure({ adapter: new Adapter() });