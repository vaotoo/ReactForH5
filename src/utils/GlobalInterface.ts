import { Dispatch } from 'react';
import { RouteComponentProps } from 'react-router';

export interface IGlobalInterface extends RouteComponentProps {
    dispatch: Dispatch<any>;
}
