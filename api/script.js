var request = new XMLHttpRequest()

var randomGiphyApiUrl = 'https://api.giphy.com/v1/gifs/random?'
var searchGiphyApiUrl = 'api.giphy.com/v1/gifs/search'
var gifUrlMap = {}

var tag = "&tag={tagValue}"
var rating = "&rating={ratingValue}"

tag = tag.replace("{tagValue}", "")
rating = rating.replace("{ratingValue}", "g")
request.open('GET', randomGiphyApiUrl + 'api_key=dFSL26MjqpUEiP2CxvJnUxO3tOfXi51e' + tag + rating)

/**
 * function that gets a random gif from giphy using the
 * input provided or a blank string
 */
function randomize() {
    var input = document.getElementById('input').value
    var tag = "&tag={tagValue}"
    tag = tag.replace("{tagValue}", input)

    rating = rating.replace("{ratingValue}", "")
    request.open('GET', randomGiphyApiUrl + 'api_key=dFSL26MjqpUEiP2CxvJnUxO3tOfXi51e' + tag + rating)
    request.send()
    request.onload = function() {
        var response = request.response
        var parsedData = JSON.parse(response)
        var gifData = parsedData.data
        var gifUrl = gifData.url
        var originalGifUrl = gifData.images.original.url
        addGifToContainer(originalGifUrl)
    }
}

/**
 * function that adds a gif img to the gif container with the supplied url
 * @param {string} gifUrl
 */
function addGifToContainer(gifUrl) {
     var gif = document.createElement('img')
     gif.setAttribute('src', gifUrl)
     gif.setAttribute('id', "gif:" + gifUrl)
     gif.setAttribute('onclick', 'printToConsole(this.id)')
     gifContainer = document.getElementById("gifContainer")
     gifContainer.insertBefore(gif, gifContainer.childNodes[0]);
}

function search() {
    var input = document.getElementById('input').value
    var q = "&q={qValue}"
    q = q.replace("{qValue}", input)

    rating = rating.replace("{ratingValue}", "")
    request.open('GET', searchGiphyApiUrl + 'api_key=dFSL26MjqpUEiP2CxvJnUxO3tOfXi51e' + q + rating)
    request.send()
    request.onload = function() {
        var response = request.response
        var parsedData = JSON.parse(response)
        var gifData = parsedData.data
        var gifUrl = gifData.url
        var originalGifUrl = gifData.images.original.url
        addGifToContainer(originalGifUrl)
    }
}

request.onload = function() {
    var response = request.response
    var parsedData = JSON.parse(response)
    var gifData = parsedData.data
    var gifUrl = gifData.url
    var originalGifUrl = gifData.images.original.url
    addGifToContainer(originalGifUrl)
}

request.send()
