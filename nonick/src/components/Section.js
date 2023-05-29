import Camisa from "../assets/Camisa.png"

export default function Section() {
    return (
        <section class="d-flex flex-column">
            <h1 class="display-6 fw-bold">T-shirts</h1>

            <div class="d-flex flex-row">
                <div class="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div class="card-body ps-4 pb-3 bg-white-blue">
                        <h5 class="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p class="card-text fw-bold">$ 69</p>
                    </div>
                </div>

                <div class="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div class="card-body ps-4 pb-3 bg-white-blue">
                        <h5 class="card-title fw-bold fs-6">Oversized - Black</h5>
                        <p class="card-text fw-bold">$ 69</p>
                    </div>
                </div>

                <div class="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div class="card-body ps-4 pb-3 bg-white-blue">
                        <h5 class="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p class="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

                <div class="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div class="card-body ps-4 pb-3 bg-white-blue">
                        <h5 class="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p class="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

                <div class="card rounded-0">
                    <img src={Camisa} class="bg-imagem" alt="Camisa"></img>
                    <div class="card-body ps-4 pb-3 bg-white-blue">
                        <h5 class="card-title fw-bolder fs-6">Oversized - Black</h5>
                        <p class="card-text  fw-bold">$ 69</p>
                    </div>
                </div>

            </div>
        </section>
    );
}