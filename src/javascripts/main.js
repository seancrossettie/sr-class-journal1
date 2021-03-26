import 'bootstrap';
import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import { entryArray, entryPrinter } from './components/entryPrinter';

const init = () => {
  domBuilder();
  entryPrinter(entryArray);
};

init();
