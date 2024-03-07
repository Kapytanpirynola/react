import React from "react";

function Pricing() {
    return(
        <div class="container p-0">
    <hr/>
    <h1 class="h3 mb-3 text-center">Plans &amp; Pricing</h1>

    <div class="row">
        <div class="col-md-10 col-xl-8 mx-auto">
            <h1 class="text-center">We've Got a Plan for Every Movie Buff</h1>
            <p class="lead text-center mb-4">Choose your perfect plan.</p>

            <div class="row justify-content-center mt-3 mb-2">
                <div class="col-auto">
                </div>
            </div>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="monthly">
                    <div class="row py-4">
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Free</h5>
                                        <span class="display-4">$0</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Basic access
                                        </li>
                                        <li class="mb-2">
                                            5 trailers per month
                                        </li>
                                        <li class="mb-2">
                                            Standard quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-outline-primary">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Standard</h5>
                                        <span class="display-4">$19</span>
                                        <span>/mo</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Full access
                                        </li>
                                        <li class="mb-2">
                                            Unlimited trailers
                                        </li>
                                        <li class="mb-2">
                                            HD quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-primary">Try it for free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Premium</h5>
                                        <span class="display-4">$39</span>
                                        <span>/mo</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Exclusive access
                                        </li>
                                        <li class="mb-2">
                                            Unlimited trailers
                                        </li>
                                        <li class="mb-2">
                                            4K quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-outline-primary">Try it for free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="annual">
                    <div class="row py-4">
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Free</h5>
                                        <span class="display-4">$0</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Basic access
                                        </li>
                                        <li class="mb-2">
                                            5 trailers per month
                                        </li>
                                        <li class="mb-2">
                                            Standard quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-outline-primary">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Standard</h5>
                                        <span class="display-4">$199</span>
                                        <span class="text-small4">/year</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Full access
                                        </li>
                                        <li class="mb-2">
                                            Unlimited trailers
                                        </li>
                                        <li class="mb-2">
                                            HD quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-primary">Try it for free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-3 mb-md-0">
                            <div class="card text-center h-100">
                                <div class="card-body d-flex flex-column">
                                    <div class="mb-4">
                                        <h5>Premium</h5>
                                        <span class="display-4">$399</span>
                                        <span>/year</span>
                                    </div>
                                    <h6>Includes:</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            Exclusive access
                                        </li>
                                        <li class="mb-2">
                                            Unlimited trailers
                                        </li>
                                        <li class="mb-2">
                                            4K quality
                                        </li>
                                    </ul>
                                    <div class="mt-auto">
                                        <a href="#" class="btn btn-lg btn-outline-primary">Try it for free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>
        </div>
    </div>

</div>

    );
}
export default Pricing;