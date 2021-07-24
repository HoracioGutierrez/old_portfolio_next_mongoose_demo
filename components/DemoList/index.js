import DemoListFilter from "../DemoListFilter";
import DemoListItem from "../DemoListItem";

const DemoList = ({ list }) => {
    return (
        <>
            <DemoListFilter />
            <section id="demo-list">
                {list.map(demo => <DemoListItem key={demo.id} demo={demo} />)}
            </section>
        </>
    );
}

export default DemoList;