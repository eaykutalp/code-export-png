import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-sh";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-django";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-tsx";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-crimson_editor";

import './index.css';

export const COLORS = {
  'One Dark': 'one_dark',
  'Github': 'github',
  'Dracula': 'dracula',
  'Nord': 'nord_dark',
  'Tomorrow': 'tomorrow_night',
  'Gruv Box': 'gruvbox',
  'Terminal': 'terminal',
  'Vibrant Ink': 'vibrant_ink',
  'Crimsion': 'crimson_editor',
}

export const LANGUAGE = {
  'C++': 'c_cpp',
  'Java': 'java',
  'Bash': 'sh',
  'Plain Text': 'plain_text',
  'Python': 'python',
  'C#': 'csharp',
  'Dart': 'django',
  'Rust': 'rust',
  'HTML': 'html',
  'CSS': 'css',
  'JavaScrip': 'javascript',
  'JSX': 'jsx',
  'Django': 'django',
  'Lua': 'lua',
  'Perl': 'perl',
  'PHP': 'php',
  'Julia': 'julia',
  'TypeScript': 'typescript',
  'TSX': 'tsx',

}

export default function Window({ borderRadius, fontSize,
                                 colors, language, exporting,
                                 text, setText }) {
  return (
    <div className="window" style={{ borderRadius: borderRadius + 'px' }}>
      <div className="title-bar">
        <div className="title-buttons">
          <div className="title-button" />
          <div className="title-button" />
          <div className="title-button" />
        </div>
        <p className="title-text" >
          App.tsx
        </p>
      </div>
      <AceEditor
        mode={LANGUAGE[language]}
        theme={COLORS[colors]}
        width="100%"
        highlightActiveLine={!exporting}
        showPrintMargin={false}
        value={text}
        onChange={setText}
        fontSize={fontSize + 'px'}
        /* I hope this doesn't have any effect on performance */
        onLoad={element => {
          element.renderer.setScrollMargin(10, 10);
          setInterval(() => element.resize(), 100);
        }}
        height="calc(100% - 35px)"
        setOptions={{ highlightGutterLine: !exporting }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
