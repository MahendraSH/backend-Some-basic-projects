const express = require('express')
const ejs = require('ejs')
const _ =require('lodash')

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname+ '/public'))
app.set('view engine', 'ejs')

const posts =[];

const homeText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem  repudiandae quisquam, ratione labore officiis dignissimos odit maxime tempora commodi et tempore  eum eveniet consequatur est recusandae ducimus, voluptates dolore quis. Cupiditate deserunt  delectus beatae rem error, aliquid fugit provident iusto et perspiciatis vitae dolor voluptate expedita  quod quam sapiente animi tempora nemo exercitationem, voluptatum rerum cumque libero unde   mollitia! Excepturi cumque iure quisquam sequi aperiam vero commodi voluptate ipsam distinctio  ipsa dolorem numquam tempore, culpa, dolores error nostrum reiciendis, fugiat odit. Esse eos,  dolore odit inventore, blanditiis illum odio ducimus nemo reiciendis ut quo nobis quibusdam  voluptatibus autem. Doloremque, totam debitis. Cum alias praesentium tempore? Quaerat eligendi optio  unde 
`

const ContactText = `Lorem ipsum, dolor sit CONTACT amet consectetur adipisicing elit. Voluptatem  repudiandae CONTACT quisquam, ratione labore officiis dignissimos odit maxime tempora commodi et tempore CONTACT eum eveniet consequatur est recusandae ducimus, voluptates dolore quis. Cupiditate deserunt  delectus beatae rem error, aliquid fugit provident iusto et perspiciatis vitae dolor voluptate expedita  quod quam sapiente animi tempora nemo CONTACT exercitationem, voluptatum rerum cumque libero unde   mollitia! Excepturi cumque iure quisquam sequi aperiam vero commodi voluptate ipsam distinctio  ipsa dolorem numquam tempore, culpa, dolores error nostrum reiciendis, fugiat odit. Esse eos,  dolore odit inventore, blanditiis illum odio ducimus nemo reiciendis ut quo nobis quibusdam CONTACT  voluptatibus autem. Doloremque, totam debitis. Cum alias praesentium tempore? Quaerat eligendi optio  unde 
`

const aboutText = `Lorem ipsum,  ABOUT ABOUT ABOUTdolor sit amet consectetur adipisicing elit. Voluptatem  repudiandae quisquam, ratione labore officiis dignissimos odit maxime tempora commodi et tempore  eum eveniet consequatur est recusandae ducimus, voluptates dolore quis. Cupiditate deserunt  delectus beatae rem error, aliquid fugit provident iusto et perspiciatis vitae dolor voluptate expedita  quod quam sapiente animi tempora nemo exercitationem, voluptatum rerum cumque libero unde   mollitia! Excepturi cumque iure ABOUT quisquam sequi aperiam vero commodi voluptate ipsam distinctio  ipsa dolorem numquam tempore, culpa, dolores error nostrum reiciendis, fugiat odit. Esse eos,  dolore odit inventore, blanditiis illum odio ducimus nemo reiciendis ut quo nobis quibusdam  voluptatibus autem. Doloremque, totam debitis. Cum alias praesentium tempore? Quaerat eligendi optio  unde 
`

app.get('/', (req, res) => {

    res.render('index', { homeContent: homeText ,posts : posts})
    // console.log(posts)


})
app.get('/about', (req, res) => {

    res.render('about', { aboutContent: aboutText })
})
app.get('/contact', (req, res) => {
    res.render('contact', { ContactContent: ContactText })

})
app.get('/compose', (req, res) => {
    res.render('compose')
})

app.get('/post/:postTile',(req,res)=>{
    // console.log(req.params)
    // if(req.params.postTile===posts[])
    for(let i =0;i<posts.length;i++)
    {
        if(_.lowerCase(posts[i].comTile)===_.lowerCase(req.params.postTile))
        {
            // console.log("The match found")
            res.render('post',{post:posts[i]})
        }
        else{
            console.log("match not found")
        }
    }

})
app.post("/compose", (req, res) => {
   const post={
    comTile :req.body.ComTitle,
    comPost:req.body.textPost
    }
    posts.push(post);
    res.redirect('/')

})

app.listen(3000, () => {

    console.log("server at 3000 port")
})