const React = require('react')
const Index = require('.')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
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
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
        </form>
        <a href="/breads">Go Home</a>
      </Default>
    )
}

module.exports = Show
