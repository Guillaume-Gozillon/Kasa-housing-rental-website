import Toggle from "./Toggle"

const Faq = () => {
    return (
        <>
            <Toggle title='Fiabilité'>
                <div className='services'>
                    <div className='toggle'>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title='Respect'>
                <div className='services'>
                    <div className='toggle'>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title='Service'>
                <div className='services'>
                    <div className='toggle'>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title='Sécurité'>
                <div className='services'>
                    <div className='toggle'>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </Toggle>
        </>
            
    )
}

export default Faq