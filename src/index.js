import createMarkdown from './createMarkdown'
import { oneElem } from './gap'
import './markdown.scss'

const markdown = createMarkdown();
const editor = markdown.createEditor();

editor.appendTo(oneElem('#container'));
