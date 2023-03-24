const React = require('react')
const Index = require('.')
const breads_router = require('../controllers/breads_controllers')
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
        <p>{bread.getBakedBy()}</p>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>      
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
        </form>
        <a href="/breads">Go Home</a>
      </Default>
    )
}

module.exports = Show
