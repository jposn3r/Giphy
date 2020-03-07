var request = new XMLHttpRequest()

var randomGiphyApiUrl = 'https://api.giphy.com/v1/gifs/random?'
var tag = "&tag={tagValue}"
var rating = "&rating={ratingValue}"

tag = tag.replace("{tagValue}", "")
rating = rating.replace("{ratingValue}", "g")
request.open('GET', randomGiphyApiUrl + 'api_key=dFSL26MjqpUEiP2CxvJnUxO3tOfXi51e' + tag + rating)

// var button = document.createElement('BUTTON')
// button.innerHTML = "Randomize"
// button.onclick = () => {
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

        var gif = document.getElementById('gif')
        gif.setAttribute('src', originalGifUrl)

        // Debug
        // console.log("ParsedData:")
        // console.log(parsedData.data)
        // console.log('Gif URL:')
        // console.log(gifUrl)
        // console.log('Original URL:')
        // console.log(originalGifUrl)
    }
}

request.onload = function() {
    var response = request.response
    var parsedData = JSON.parse(response)
    var gifData = parsedData.data
    var gifUrl = gifData.url
    var originalGifUrl = gifData.images.original.url

    var gif = document.createElement('img')
    gif.setAttribute('src', originalGifUrl)
    gif.setAttribute('id', "gif")

    document.body.appendChild(gif)
    // document.body.appendChild(button)

    console.log("ParsedData:")
    console.log(parsedData.data)
    console.log('Gif URL:')
    console.log(gifUrl)
    console.log('Original URL:')
    console.log(originalGifUrl)
}

request.send()
