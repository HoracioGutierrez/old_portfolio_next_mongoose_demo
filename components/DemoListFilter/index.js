import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import style from "./DemoListFilter.module.scss"

const DemoListFilter = () => {

    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = useState('');

    const handleExpandInput = () => {
        setExpanded(!expanded);
        setValue('');
    };

    const handleInputChange = event => {
        setValue(event.target.value);
    };

    return (
        <section>
            <IconButton>
                <Icon>import_export</Icon>
            </IconButton>
            <IconButton>
                <Icon>filter_list</Icon>
            </IconButton>
            <IconButton onClick={handleExpandInput}>
                <Icon>search</Icon>
            </IconButton>
            <TextField autoFocus={true} id="standard-basic" size="medium" className={` ${style.animated} ${ expanded ? style.open : style.closed }`} value={value} onChange={handleInputChange} />
        </section>
    );
}

export default DemoListFilter;