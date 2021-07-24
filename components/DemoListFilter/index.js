import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const DemoListFilter = () => {
    return (
        <section>
            <IconButton>
                <Icon>import_export</Icon>
            </IconButton>
            <IconButton>
                <Icon>filter_list</Icon>
            </IconButton>
            <IconButton>
                <Icon>search</Icon>
            </IconButton>
        </section>
    );
}

export default DemoListFilter;