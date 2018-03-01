module.exports = function(request, response, next) {
    let repository = request.app.get('repository');

    repository.search(request.params.id).then((results) => {
        response.send(results);
    });
}