import { createMarkdown } from './index'
import { oneElem } from './gap'

const markdown = createMarkdown();

markdown.appendTo(oneElem('#container'));
