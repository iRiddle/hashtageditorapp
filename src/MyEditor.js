import React, { Component } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import Editor, {
  createEditorStateWithText,
  createEditorStateWithContent,
  composeDecorators
} from "draft-js-plugins-editor";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createEmojiPlugin from "draft-js-emoji-plugin";
import editorStyles from "./editorStyles.module.css";
import hashtagStyles from "./hashtagStyles.module.css";

import createFocusPlugin from "draft-js-focus-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import createDividerPlugin from "draft-js-divider-plugin";

import { BlockquoteButton } from "draft-js-buttons";

import buttonStyles from "./buttonStyles.module.css";
import toolbarStyles from "./toolbarStyles.module.css";
import blockTypeSelectStyles from "./blockTypeSelectStyles.module.css";

import "draft-js-side-toolbar-plugin/lib/plugin.css";
import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-divider-plugin/lib/plugin.css";

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });

const focusPlugin = createFocusPlugin();
const decorator = composeDecorators(focusPlugin.decorator);
const dividerPlugin = createDividerPlugin({ decorator });
const { DividerButton } = dividerPlugin;
const { DividerTilda } = dividerPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const plugins = [
  hashtagPlugin,
  focusPlugin,
  dividerPlugin,
  sideToolbarPlugin,
  emojiPlugin
];

/* eslint-disable */
const initialState = {
  entityMap: {
    "0": {
      type: "divider",
      mutability: "IMMUTABLE",
      data: {}
    }
  },

  blocks: [
    {
      key: "9gm3s",
      text:
        "This is a simple example for divider plugin. Click side toolbar divider button.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    },
    {
      key: "ov7r",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0
        }
      ],
      data: {}
    }
  ]
};
/* eslint-enable */

const text = `1.Работает плагин #Хэштег
2. Работает плагин дивидер (надо кликнуть на пустом поле), добавлено еще три кнопки дивидеров, 
но они все одинаковые
3. Работает плагин смайлов, при наборе ":smi" подбирает смайлы
`;

export default class SimpleHashtagEditor extends Component {
  state = {
    //editorState: createEditorStateWithText(text)
    editorState: createEditorStateWithText(text, convertFromRaw(initialState))

    //editorState: EditorState.createWithContent(convertFromRaw(initialState))
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={element => {
            this.editor = element;
          }}
        />

        <SideToolbar>
          {externalProps => (
            <div>
              <DividerButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <DividerTilda {...externalProps} />
            </div>
          )}
        </SideToolbar>

        <EmojiSuggestions />
        <div />
        <div className={editorStyles.optios}>
          <EmojiSelect />
        </div>
      </div>
    );
  }
}
