const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index ({breads, title}) {
    return (
      <Default title = {title}>
        <h2>Index Page</h2>
        {/* <p> I rock with {breads[0].name} bread! </p> */}
        <ul>
            {
                breads.map((bread, index) =>{
                    return(<li key={index}>
                        <a href={`/breads/${index}`}>{bread.name}</a>
                    </li>)
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index
