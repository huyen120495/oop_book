module.exports = function(request, response) {
    let repository = request.app.get('repository');
    repository.save(request.body.book).then(() => {
        response.send({message : 'modify'});
    });
}