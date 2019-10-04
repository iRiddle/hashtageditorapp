// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from './MyEditor';
import editorStyles from './editorStyles.module.css';
import hashtagStyles from './hashtagStyles.module.css';

import {
    HeadlineOneButton,
    HeadlineTwoButton,
    BlockquoteButton,
    CodeBlockButton,
    //DividerButton1,
  } from 'draft-js-buttons';
  import buttonStyles from './buttonStyles.module.css';
  import toolbarStyles from './toolbarStyles.module.css';
  import blockTypeSelectStyles from './blockTypeSelectStyles.module.css';


ReactDOM.render(<MyEditor />, document.getElementById('root'));
