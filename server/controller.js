let namesArray = [];

module.exports = {

    addName: (req, res) => {
        console.log(req.params,req.body,req.query)
        namesArray.push(req.body.name)
        console.log(namesArray)
        res.status(200).send(namesArray)
    },
    
    updateName: (req, res) => {
        console.log(req.body)
        const { original,changed } = req.body
        namesArray = namesArray.map(el => {
            if(el === original){
                return el = changed
            }else {
                return el
            }
        })

        console.log(namesArray)
    },

    deleteName: (req, res) => {

    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
       const fortunes = ["A faithful freind is a strong defense.", "A friend is present you give yourself.", "A lifetime of happiness lies ahead of you.", "A soft voice may be awfully persausive.", "Believe it can be done.",];
       let randIndex = Math.floor(Math.random() * fortunes.length);
       let randFortune = fortunes[randIndex];
       res.status(200).send(randFortune);
    }
}