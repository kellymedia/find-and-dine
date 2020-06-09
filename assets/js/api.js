console.log ("Js file is loaded")

$.ajax({
    url: "https://api.pexels.com/v1/search?query=kitchen",
    headers: { "Authorization" : "563492ad6f917000010000015eb8fc8048ae495794945651de698734" }
}).then(function(data){
    console.log('KitchenPics', data)
    console.log('KitchenPics', data.photos[0].src.large)
    console.log('this our random num ??', Math.floor( Math.random() * data.photos.length))
    var randomNum = Math.floor( Math.random() * data.photos.length)
    $(`<style type='text/css'> .heroPic{ background: url(${data.photos[randomNum].src.large}) no-repeat center center fixed; background-size: 100%; } </style>`).appendTo("head");

    var pic = $('<img>')
    pic.attr('src', data.photos[0].src.large)
 //   $('.container').append(pic)
    console.log(img)

    
 
})