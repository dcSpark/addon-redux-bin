import { FC } from 'react';
import 'jsoneditor/dist/jsoneditor.css';
interface Props {
    value: object;
    onChange: ChangeHandler;
}
export declare type ChangeHandler = (value: any) => void;
declare const ObjectEditor: FC<Props>;
export default ObjectEditor;
