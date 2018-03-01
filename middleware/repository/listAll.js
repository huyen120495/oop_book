module.exports = function(request, response) {
    let repository = request.app.get('repository');

    repository.all().then((results) => {
        response.send(results);
    });
}