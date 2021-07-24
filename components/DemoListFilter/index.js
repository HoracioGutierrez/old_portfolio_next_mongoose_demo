import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import style from "./DemoListFilter.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchChange } from '../../api/actions';
import { useEffect } from 'react';

const DemoListFilter = () => {

    const dispatch = useDispatch()
    const [expanded, setExpanded] = useState(false);
    const {search} = useSelector(({demos:{filters}})=>filters);

    const handleExpandInput = () => {
        setExpanded(!expanded);
        dispatch(filterSearchChange(""))
    };

    const handleInputChange = event => {
        dispatch(filterSearchChange(event.target.value));
    };

    useEffect(() => dispatch(filterSearchChange("")) , []);

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
            <TextField autoFocus={true} id="standard-basic" size="medium" className={` ${style.animated} ${ expanded ? style.open : style.closed }`} value={search} onChange={handleInputChange} />
        </section>
    );
}

export default DemoListFilter;