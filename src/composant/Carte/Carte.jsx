import './Carte.scss'

function Carte({ info }) {
    const cell0 = info[0];
    return (

        <article>
            <div className='RF'>RÉPUBLIQUE FRANÇAISE</div>
            <figure>
                <p className='numCarte'>
                    <span className='colorGrace' ><b>CARTE NATIONALE D'IDENTITÉ N° : </b></span>
                    &nbsp; &nbsp; {cell0.identityNumber}
                    <span className='NF'>Nationalité Française</span>
                </p>

                <div className='detail'>
                    <img src="https://pics.craiyon.com/2023-10-29/ddbb48b314d74b11a6af60735a3792aa.webp" className="img"></img>
                    <p className='colorGrace'><b>&nbsp; Nom : </b> &nbsp; <span style={{ color: "black" }}>{cell0.name}</span><br></br><br></br>
                        <b> &nbsp; Prénom(s) : </b> &nbsp; <span style={{ color: "black" }}>{cell0.lastName}</span>  <br></br><br></br>
                        <b> &nbsp; Sexe : </b> &nbsp; <span style={{ color: "black" }}>{cell0.sexe}</span> <br></br><br></br>
                        <b> &nbsp; à : </b> &nbsp; <span style={{ color: "black" }}>{cell0.city}</span> <br></br><br></br>
                        <b> &nbsp; Taille : </b> &nbsp; <span style={{ color: "black" }}>{cell0.size}</span> <br></br><br></br>
                        <b> &nbsp; Né(e) le : </b> &nbsp; <span style={{ color: "black" }}>{cell0.date}</span>
                    </p>
                </div>
            </figure>
            <p style={{textAlign:"center"}}>&nbsp;IDFRAMMACHIN{'<<<<<<<<<<<<<<<<<<<<<<<<<'}598079</p>
            <p style={{textAlign:"center"}}>&nbsp;10235225897455TRUCBIDULE{'<<<<<'}598MPF079</p>
        </article>

    )
}
export default Carte;