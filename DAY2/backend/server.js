import express from 'express';

const app=express()


app.get('/',(req,res)=>{
    res.send('server is ready');
})

//get a list of 5 jokes

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
    id: 1,
    title: 'A joke',
    content: 'Why don’t scientists trust atoms? Because they make up everything!'
},
{
    id: 2,
    title: 'Another joke',
    content: 'Why did the math book look sad? Because it had too many problems.'
},
{
    id: 3,
    title: 'Yet another joke',
    content: 'Why dont skeletons fight each other? They don’t have the guts.'
},
{
    id: 4,
    title: 'Classic joke',
    content: 'What do you call fake spaghetti? An impasta.'
},
{
    id: 5,
    title: 'Tech joke',
    content: 'Why do programmers prefer dark mode? Because the light attracts bugs.'
}

    ];
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at ${port}`);

})