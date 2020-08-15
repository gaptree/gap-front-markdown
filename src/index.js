import createMarkdown from './createMarkdown'
import { oneElem } from './gap'

const markdown = createMarkdown();
const editor = markdown.createEditor();

editor.appendTo(oneElem('#container'));
