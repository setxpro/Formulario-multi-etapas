import { useNavigate } from 'react-router-dom';
import * as C from './styles';

import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../themes';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {

        if (state.name === '') {
            navigate('/');
        }
        else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        
    },[dispatch])

    const handleNextStep = () => {
       if (state.email && state.github !== '') {
           alert(`Ok ${state.name} agora é com a empresa!`)
           console.log(state)
       }
       else {
           navigate('/');
       }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value 
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value 
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos ?</h1>
                <p>Preencha os campos para entrarmos em contato quando houver um Job.</p>

                <hr/>

                <label>
                    Qual é o seu E-mail ?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual é o seu Github ?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                 <C.BackButton to="/step2">Voltar</C.BackButton>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}