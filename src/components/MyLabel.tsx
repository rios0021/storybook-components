import './myLabel.css';

interface Props {
    /**
    * Message to show
    */
    label: string;
    /**
    * Size of the label
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
    * If the text will be capitalized
    */
    allCaps?: boolean;
    /**
    * Color of the text
    */
    color?: 'primary'|'secondary'|'tertiary';
    /**
   * Custom color from hex value
   */
    fontColor?: string;
}


export const MyLabel = ({
        label = 'No Label',
        size = 'normal',
        allCaps = false,
        color = 'primary',
        fontColor 
    }: Props) => {
    return (
        <span 
        style={{ color: fontColor}}
        className={`label ${size} text-${color}`}
        >
            {
                allCaps 
                ?
                    label.toUpperCase()
                :
                    label
            }
        </span>
    )
}