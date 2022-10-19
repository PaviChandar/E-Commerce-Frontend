import React, { useEffect, useState } from "react";
import "../../assets/css/latestProduct.css"

const LatestProduct = () => {

    return (
        <div className="latestImage">
            <div className="category">
                <a className="lightbox" href="#product1" >
                    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2-VSvI4Qh1BNXkAIaDTz5Y6VnTN41B9FoWl3ZoRUTRoBjSOLr0WlY_lizDXbjWOJx55v5N5vVzzSh3_Q5IjOBhsD5biON4p8jmoJnfP6ScqpiuJ5Fw9p2sg&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product1">
                    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2-VSvI4Qh1BNXkAIaDTz5Y6VnTN41B9FoWl3ZoRUTRoBjSOLr0WlY_lizDXbjWOJx55v5N5vVzzSh3_Q5IjOBhsD5biON4p8jmoJnfP6ScqpiuJ5Fw9p2sg&usqp=CAE" alt="image" />
                    <a class="lightbox-close" href="product1"></a>
                </div>
                <span> M12 U Itra 5G Smartphone Full Screen Android12 Telephone With 16GB+1T Face Unlock Real 4G Gaming Smartphone</span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product2" >
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT50tXYdH4VpiV2Y6zge0X2-Q9myZbiWH5lF_5GbUwnW0tWtI35ecM2f4a_qMj842Z2sZrhJ7ZwmvTJxiBQaL5xMLSsLXWIHUWJCq3SlKCA7_2yAgPTd9ed0A&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product2">
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT50tXYdH4VpiV2Y6zge0X2-Q9myZbiWH5lF_5GbUwnW0tWtI35ecM2f4a_qMj842Z2sZrhJ7ZwmvTJxiBQaL5xMLSsLXWIHUWJCq3SlKCA7_2yAgPTd9ed0A&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product2"></a>
                </div>
                <span>6.43" inch (16.33cm) FHD+ AMOLED Punch-hole Display with 2400x1080 pixels. Large Screen to Body ratio of 90.8% Ultra-slim Retro Design with Dual Orbit Lights around Camera</span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product3" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyy6-NVAsiaIjj17PMa7I3UgVrqbOR5P9262ZNI0jAh36u16HoUcUhSabUcRgO7PDTwIdZVaKYXLUvq4xwfRFTwzh7cWAQw9XJh5r17gw&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product3">
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyy6-NVAsiaIjj17PMa7I3UgVrqbOR5P9262ZNI0jAh36u16HoUcUhSabUcRgO7PDTwIdZVaKYXLUvq4xwfRFTwzh7cWAQw9XJh5r17gw&usqp=CAE" alt="image" />
                    <a class="lightbox-close" href="product3"></a>
                </div>
                <span>8 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.36 cm (6.44 inch). Full HD+ Display64MP + 8MP 32MP Front Camera. 4000 mAh Battery</span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product4" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT78TalsdXNXwtgjAunCB-vc4tnP6OlUWxJmie5FHs_IMBztodTqJ-jk8AMbLqVCdJQO9NHIAiyMrCk-aiv2dIRXcuVIATjuQaqaCyI-fICT0E0y3YDvmpB_w&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product4">
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT78TalsdXNXwtgjAunCB-vc4tnP6OlUWxJmie5FHs_IMBztodTqJ-jk8AMbLqVCdJQO9NHIAiyMrCk-aiv2dIRXcuVIATjuQaqaCyI-fICT0E0y3YDvmpB_w&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product4"></a>
                </div>
                <span>The Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Advanced dual-camera system with 12MP Wide and Ultra Wide </span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product5" >
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_cKIWryprjNr1-UW1JWF2h2V41m6xuUrCKmNpqLmDMMwObUgq5XDPDfisGCG5kJ1XauJg1rMThr4SBt3ltm8YTWP__gYco_oO4pUrrPjE0tgUZyFJ4OzX&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product5">
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_cKIWryprjNr1-UW1JWF2h2V41m6xuUrCKmNpqLmDMMwObUgq5XDPDfisGCG5kJ1XauJg1rMThr4SBt3ltm8YTWP__gYco_oO4pUrrPjE0tgUZyFJ4OzX&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product5"></a>
                </div>
                <span>Rear Camera: 64 MP + 8 MP + 2 MP. Front Camera: 20 MP.6 GB RAM and 128 GB internal memory. Dimensions: 163.2 mmx75.95 mmx7.7 mm. Color options: Night Black. Battery Capacity:: 4500 mAh </span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product6" >
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbMduVofOp4ms58jbnoDXKRzl8XAtFCVlrkFm1g3YDhIQhw2AZa-ASJjMjpqxUW79cmtu32xdaZ17E3evtClRJNiJUmQtAv1KBIySTR1ZN9rDNZ9Ic8WvZ&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product6">
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbMduVofOp4ms58jbnoDXKRzl8XAtFCVlrkFm1g3YDhIQhw2AZa-ASJjMjpqxUW79cmtu32xdaZ17E3evtClRJNiJUmQtAv1KBIySTR1ZN9rDNZ9Ic8WvZ&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product6"></a>
                </div>
                <span>Be Ready To Encounter A Thrilling User Experience, Improved Mobile Performance, And Smooth Gaming With The Powerful Vivo T1 5g Mobile Phone. </span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product7" >
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbBnbM-QB42vPsunpopdFgSdFnuTlcqo2yIK2bEVFFQIPcE_y2ONed8FMwHixovYQYDlXV6Cz2OecBwldsAMxTwdb8zOAn6qcaTLpQtTCCd7sV9bUmwPnZqg&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product7">
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbBnbM-QB42vPsunpopdFgSdFnuTlcqo2yIK2bEVFFQIPcE_y2ONed8FMwHixovYQYDlXV6Cz2OecBwldsAMxTwdb8zOAn6qcaTLpQtTCCd7sV9bUmwPnZqg&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product7"></a>
                </div>
                <span>Corning Gorilla Glass Victus Protection. 256 GB ROM. Hi-Res Audio certification. Quad speakers. Dolby Atmos 120W Xiaomi HyperCharge. Snapdragon 8 Gen 1 Processor. 50MP + 50MP + 50MP. Xiaomi ProFocus Ultra-Night Mode</span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product8" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTT7rXeJWvXvk5iH75YsNC5sUYMbc14txvmSwks97WkXUB6_nufR6HCVuWxNPb2yqNVqbgRAaf50rnnp8cw85lnLjGXMTqRZAu2LUmqtLzJn4AbL6PcmfmHsQ&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product8">
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTT7rXeJWvXvk5iH75YsNC5sUYMbc14txvmSwks97WkXUB6_nufR6HCVuWxNPb2yqNVqbgRAaf50rnnp8cw85lnLjGXMTqRZAu2LUmqtLzJn4AbL6PcmfmHsQ&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product8"></a>
                </div>
                <span>Camera: All-new Triple Primary Camera, 50 MP TrμePixel Custom GN2 Sensor + OIS, 48MP Sony IMX586 Ultra-wide Camera, 48MP Periscope 120x Telephoto Camera + OIS </span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product9" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPQSOaLW7WCk8lZzbgVMPg1Muy0CDSplnuke9hRxoY9ojmPZd5nhFXdLLtQ3xCz5krILE189-TKTJpKZg6V5LHd7JWCgHN6FG4kFsI3wFEr6YDjiCaurIY&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product9">
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPQSOaLW7WCk8lZzbgVMPg1Muy0CDSplnuke9hRxoY9ojmPZd5nhFXdLLtQ3xCz5krILE189-TKTJpKZg6V5LHd7JWCgHN6FG4kFsI3wFEr6YDjiCaurIY&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product9"></a>
                </div>
                <span>Main Screen : 17.03cm (6.7") Dynamic AMOLED 2X(2640 x 1080). Cover Screen : 4.82cm (1.9") Super AMOLED (260 x 512)  Qualcomm Snapdragon 888. Octa-core. 12MP Ultra wide camera</span>
            </div>

            <div className="category">
                <a className="lightbox" href="#product10" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh2H9-4_LMpU5qrg7hmlQtm9dZSzIXvyAruairgsBu7CqBOOh3bmMxaLhJ0V2PwVnnZB9rgC21dx4VnLHRhE_Ck-hShswM56G2vIMi-XeEtU_o5vcJgY-l0Q&usqp=CAE" alt="image" />
                </a>
                <div className="lightbox-target" id="product10" >
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh2H9-4_LMpU5qrg7hmlQtm9dZSzIXvyAruairgsBu7CqBOOh3bmMxaLhJ0V2PwVnnZB9rgC21dx4VnLHRhE_Ck-hShswM56G2vIMi-XeEtU_o5vcJgY-l0Q&usqp=CAE" alt="image" />
                    <a className="lightbox-close" href="product10"></a>
                </div>
                <span>The innovative Glyph Interface of the Nothing smartphone lays the path for a one-of-a-kind sort of communication. Furthermore, distinct light patterns alert you to incoming calls, app alerts, charging status, and other information.</span>
            </div>

        </div>
    )
}

export default LatestProduct