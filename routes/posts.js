
module.exports = {
    getPosts(req, res) {
      res.status(200).send(req.store.posts)
    },

    addPost(req, res) {
      req.store.posts.push(req.body)
      res.status(201).send({postId: req.store.posts[req.store.posts.length - 1]})
    },

    updatePost(req, res) {
      Object.assign(req.store.posts[req.params.postId], req.body)
      res.status(200).send(req.store.posts[req.params.postId])  
    },

    removePost(req, res) {
      req.store.posts.splice(req.params.postId, 1)
      res.status(204).send()
    }
}