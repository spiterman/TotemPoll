module.exports = {
  testGet: function(req, res){
    // console.log(req.data);
    res.send('hello world');
  },
  testPost: function(req, res){
    var data = req.data;
    // console.log(req.data);
    // console.log(data);
    res.send('Got it');
  }
};
