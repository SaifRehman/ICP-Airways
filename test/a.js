const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/', (req, res) => {
    axios.get('https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=%20DnIcLahkKeaggpaelctV&app_code=%20qAcrILPYo5JmKS98X_GCoA&mode=retrieveLandmarks&prox=25.382671199999997,55.4971703,1000')
  .then(function(response) {
      console.log(response.data)
    res.send(response.data);
  });
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))