import  placeholderPropertyObj from './properties/placeholderPropertyObj.js'
import propertyForSaleArr from './properties/propertyForSaleArr.js'

function getPropertyHtml(property = [placeholderPropertyObj]) {
    
    return property.map(({
        propertyLocation,
        priceGBP,
        roomsM2,
        comment,
        image
    })=> {
        const totalSizeM2 = roomsM2.reduce((total,room)=> total + room,0)
    // console.log('property arg:', property)
    // console.log('isArray?', Array.isArray(property))
    // console.log('first item:', property && property[0])
    
    return `
    <section class="card">
        <img src="D:/Git hUB BACKUP/Repositories/Real Estate/images/${image}" alt = 'property image' >
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalSizeM2} m&sup2;</h3>
        </div>
    </section> `}).join('')
    }
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.


*/


/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)