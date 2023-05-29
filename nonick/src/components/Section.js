import Camisa from "../assets/Camisa.png"


export default function Section() {
    return (
        <section className="d-flex flex-column">
            <h1 className="display-6 fw-bold">T-shirts</h1>

            <div className="d-flex flex-row">
                <div className="card rounded-0">
                    <img src={Camisa} className="bg-imagem" alt="Camisa"></img>
                    <div className="card-body ps-4 pb-3 bg-white-blue">
                        <h5 className="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p className="card-text fw-bold">$ 69</p>
                    </div>
                </div>

                <div className="card rounded-0">
                    <img src={Camisa} className="bg-imagem" alt="Camisa"></img>
                    <div className="card-body ps-4 pb-3 bg-white-blue">
                        <h5 className="card-title fw-bold fs-6">Oversized - Black</h5>
                        <p className="card-text fw-bold">$ 69</p>
                    </div>
                </div>

                <div className="card rounded-0">
                    <img src={Camisa} className="bg-imagem" alt="Camisa"></img>
                    <div className="card-body ps-4 pb-3 bg-white-blue">
                        <h5 className="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p className="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

                <div className="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div className="card-body ps-4 pb-3 bg-white-blue">
                        <h5 className="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p className="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

                <div className="card rounded-0">
                    <img src={Camisa} className="bg-imagem" alt="Camisa"></img>
                    <div className="card-body ps-4 pb-3 bg-white-blue">
                        <h5 className="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p className="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

            </div>
        </section>
    );
}