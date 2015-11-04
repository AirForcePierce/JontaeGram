import React from 'react';
import ReactDom from 'react-dom';
import Famgram from './famgrammenu';


let el = document.querySelector('.app');

ReactDom.render(
  <Famgrammenu/>,
  el
);
