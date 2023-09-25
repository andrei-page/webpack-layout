import { loader } from './services/loader';
function runAppModule() {
  loader();
}
__.thenLoadPage(runAppModule);
