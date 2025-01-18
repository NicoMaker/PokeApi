export function Card({pokemon}) {

    return (
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name}/>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p className="card-text">
                        {pokemon.types.map(t => <button key={t.slot} type="button" className=" button btn btn-warning">{t.type.name}</button> )}
                    </p>
                </div>
            </div>
    )
}
