export default function Headers() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <nav class="col nav">
                    <a class="nav-link text-dark border-end" href="#">Login</a>
                    <a class="nav-link text-dark" href="#">Registre-se</a>
                </nav>

                <img class="text-center" src="./noNickLogo1.png" alt="Logo NoNick" width="250px"></img>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="col justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="cart_.png" alt="Carrinho"></img>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <img src="heart_" alt="Amei"></img>
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex ms-3" role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn" type="submit">
                            <img src="..\Repositórios GitHub\Sites-Web-Exemplos\ReactLoja\nonick\public\Icons\search_.png" alt="Pesquisa"></img>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}