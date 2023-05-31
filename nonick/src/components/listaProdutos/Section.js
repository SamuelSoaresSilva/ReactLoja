
export default function Section(props) {
    return (
        <section className="m-5 d-flex flex-column">
            <h1 className="display-6 fw-bold">{props.title}</h1>
            <div className="d-flex flex-row">
                {props.children}
            </div>
        </section>
    );
}