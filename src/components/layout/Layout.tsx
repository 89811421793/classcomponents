import { ReactNode, Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode; 
}

export class Layout extends Component<LayoutProps> {
    render() {
        const { children } = this.props;

        return (
            <>
                <Header/> 
                {children}
                <Footer/>
            </>
        );
    }
}


