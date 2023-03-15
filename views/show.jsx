const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            {
                bread.hasGluten
                //true
                ? <span>does </span>
                //false
                : <span>does not </span>
            }
            have Gluten.
        </p>
        <img src={bread.image} alt= {bread.name}></img>
        <a href="/breads">Go Home</a>
      </Default>
    )
}

module.exports = Show
