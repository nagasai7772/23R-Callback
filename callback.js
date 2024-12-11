function placed(pizza)
{
    console.log(' 📦orderplaced');
    pizza();
}

function prepare(pizza)
{
    console.log(' 🔥prepare pizza');
    pizza();
}

function Bake(pizza)
{
    console.log(' 🔃Bake pizza');
    pizza();
}

function pack(pizza)
{
    console.log(' 👜pack pizza');
    pizza();
    
}
function Deliver(pizza)
{
    console.log(' 🎁deliver pizza');
    
    
}

placed(()=>
{
    prepare(()=>
    {
        Bake(()=>
        {
            pack(()=>
            {
                Deliver()
            })
        })
    })
})

