import Navbar from "./NavbarComponent"
import ItemListContainer from "./ItemListcontainer"
import Acordeon from "./Acordeon"

const Perfumes =() => {
    return(
        <><><><Navbar></Navbar>
            <ItemListContainer></ItemListContainer></><div className="container mt-4">
                <h2 className="mb-3">Detalles</h2>

                <div className="accordion" id="perfumeAccordion">

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                Bad Boy New York Carolina Herrera
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#perfumeAccordion">
                            <div className="accordion-body">
                                <strong>Tipo:</strong> Eau de Parfum<br />
                                <strong>Familia olfativa:</strong> Amaderada Aromática<br />
                                <strong>Notas de salida:</strong> Bergamota, pimienta rosa, hoja de violeta<br />
                                <strong>Notas de corazón:</strong> Salvia, geranio, lavanda<br />
                                <strong>Notas de fondo:</strong> Vetiver, cuero, haba tonka<br />
                                Una fragancia magnética, urbana y elegante.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                Diesel Only The Brave
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#perfumeAccordion">
                            <div className="accordion-body">
                                <strong>Tipo:</strong> Eau de Toilette<br />
                                <strong>Familia olfativa:</strong> Oriental Amaderada<br />
                                <strong>Notas de salida:</strong> Limón, mandarina, cilantro<br />
                                <strong>Notas de corazón:</strong> Violeta, cedro, romero<br />
                                <strong>Notas de fondo:</strong> Ámbar, cuero, benjuí, estirax<br />
                                Ideal para el día a día con actitud.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                               Tom Ford Noir de Noir
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#perfumeAccordion">
                            <div className="accordion-body">
                                <strong>Tipo:</strong> Eau de Parfum<br />
                                <strong>Familia olfativa:</strong> Chipre floral oscuro<br />
                                <strong>Notas de salida:</strong>Rosa negra <br />
                                <strong>Notas de corazón:</strong> Trufa, pachulí<br />
                                <strong>Notas de fondo:</strong>Oud, vainilla, musgo de roble <br />
                                Un perfume oscuro, misterioso y lujoso. Tiene un perfil floral-terroso, con una rosa profunda entremezclada con la intensidad del oud y el dulzor del pachulí y la vainilla. Muy elegante, ideal para ocasiones especiales y ambientes sofisticados. Unisex pero con un aire ligeramente más masculino.
                            </div>
                        </div>
                    </div>

                </div>
            </div></><div className="accordion" id="perfumeAccordion">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                          Aqua di gio 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#perfumeAccordion">
                        <div className="accordion-body">
                            <strong>Tipo:</strong> Eau de Toilette<br />
                            <strong>Familia olfativa:</strong> Aromática acuática<br />
                            <strong>Notas de salida:</strong> Lima, bergamota, jazmín<br />
                            <strong>Notas de corazón:</strong>Notas marinas, nuez moscada, romero <br />
                            <strong>Notas de fondo:</strong>Almizcle, cedro, pachulí <br />
                            Un clásico atemporal que evoca frescura y elegancia. Perfecto para uso diario y climas cálidos, tiene un carácter limpio, marino y herbal. Muy versátil, ideal tanto para oficina como para salidas informales.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Scandal Parfum Intense
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#perfumeAccordion">
                        <div className="accordion-body">
                            <strong>Tipo:</strong> Eau de Parfum Intense<br />
                            <strong>Familia olfativa:</strong> Ámbar dulce<br />
                            <strong>Notas de salida:</strong>Geranio <br />
                            <strong>Notas de corazón:</strong> Caramelo salado<br />
                            <strong>Notas de fondo:</strong>Sándalo <br />
                            Un perfume goloso y potente, donde el caramelo salado domina con un giro masculino. Se siente dulce, cálido y algo atrevido, con un fondo amaderado que le da profundidad. Muy d
uradero y con excelente proyección. Perfecto para destacar en una salida nocturna.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                           Stronger with You Intensenly
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#perfumeAccordion">
                        <div className="accordion-body">
                            <strong>Tipo:</strong> Eau de Parfum <br />
                            <strong>Familia olfativa:</strong> Oriental Fougère<br />
                            <strong>Notas de salida:</strong>Pimienta rosa, bayas, enebro <br />
                            <strong>Notas de corazón:</strong> Canela, salvia, lavanda<br />
                            <strong>Notas de fondo:</strong> Vainilla, ámbar, castaña, azúcar glas <br />
                            Una composición dulce, especiada y cálida que deja una estela envolvente y seductora.
                        </div>
                    </div>
                </div>
                 


                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Le Male Elixir Jean Paul Gaultier
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#perfumeAccordion">
                        <div className="accordion-body">
                            <strong>Tipo:</strong> Eau de Parfum Intense<br />
                            <strong>Familia olfativa:</strong> Oriental ambarada<br />
                            <strong>Notas de salida:</strong> Menta, lavanda<br />
                            <strong>Notas de corazón:</strong>Benjuí, vainilla <br />
                            <strong>Notas de fondo:</strong> Miel, tabaco, haba tonka<br />
                            Una versión más intensa y sensual del clásico Le Male. Se siente cálido, dulce y masculino, con una lavanda más oscura, rodeada de vainilla cremosa y notas resinosas. Ideal para noches frías o salidas nocturnas, con un aroma envolvente que deja estela.`
      
                        </div>
                    </div>
                </div>


            </div></>

            
           










    )
};



   

export default Perfumes