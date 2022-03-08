import { Routes ,Route } from 'react-router-dom';
import { FormStep1 } from './pages/FormStepOne';
import { FormStep2 } from './pages/FormStepTwo';
import { FormStep3 } from './pages/FormStepThree';

export const Rota = () => {
    return (
        <Routes>
            <Route path="/" element={<FormStep1/>}/>
            <Route path="/step2" element={<FormStep2/>}/>
            <Route path="/step3" element={<FormStep3/>}/>
        </Routes>
    );
}