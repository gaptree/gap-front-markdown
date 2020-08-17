import hljs from 'hljs';
import katex from 'katex';
import markdownit from 'markdownit';
import monaco from 'monaco';

import Coder from './Coder';
import Parser from './Parser';
import Markdown from './Markdown';

const DEFAULT_CONTENT = '# TecPoster Markdown Title\n';

export const createCoder = () => {
  return new Coder(monaco, DEFAULT_CONTENT);
};

export const createParser = () => {
  return new Parser(hljs, katex, markdownit);
}

export const createMarkdown = () => {
  return new Markdown(createCoder(), createParser());
};
