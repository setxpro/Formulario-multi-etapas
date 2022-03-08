import { BrowserRouter as Router } from 'react-router-dom';
import { Rota } from './router';

import { FormProvider } from './contexts/FormContext';

export const App = () => {
  return (
    <Router>
      <FormProvider>
         <Rota/>
      </FormProvider>
    </Router>
  );
}