import React from 'react';

const Services = () => {
    return (
        <div>
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3> </h3>
                </div>
                <div class="row text-center md-8">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-solid fa-virus fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Vaccination</h4>
                        <p class="text-muted">The Vaccination Center of United Hospital is providing its keen continues services. This department serves the indoor neonates, children & Adult by providing life saving vaccines. This department plays a vital role to improve the health status of community. This department maintains the excellent cold Chain for Vaccine Storage.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-hand-holding-heart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Blood Bank</h4>
                        <p class="text-muted"> It aims to provide patients with the safest possible blood, equivalent to any international standard. All donations received in the blood bank are voluntary non-remunerated. All necessary safety measures are taken for both the donors and the recipients including performing the mandatory screening tests for infectious diseases. </p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Medical Records</h4>
                        <p class="text-muted">Birth certificate/duplicate birth certificate, duplicate/amended death certificate, fitness certificate/medical certificate, duplicate /Xerox copy of investigations (radiological and pathological), prescriptions for OPD patient and for IPD patient discharge summary are generally provided from medical records department as well as all kinds of insurance claim forms are also processed by medical records department as per the protocol of UHL.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Services;