import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../components/Header';

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {
    return(
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.SideBar>
                            sideBar
                    </C.SideBar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}