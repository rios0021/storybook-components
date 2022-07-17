/// <reference types="react" />
import './myLabel.css';
export interface Props {
    /**
    * Message to show
    */
    label: string;
    /**
    * Size of the label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * If the text will be capitalized
    */
    allCaps?: boolean;
    /**
    * Color of the text
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * Custom color from hex value
   */
    fontColor?: string;
    /**
   * Custom color for background
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
