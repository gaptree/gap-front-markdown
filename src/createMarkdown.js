import hljs from 'hljs'
import katex from 'katex'
import markdownit from 'markdownit'
import monaco from 'monaco'
import Markdown from './Markdown'

export default (reses) => {
  return new Markdown(
    {
      hljs,
      katex,
      markdownit,
      monaco,
    },
  );
};
