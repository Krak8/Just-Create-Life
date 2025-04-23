ServerEvents.recipes(jcl => {

    jcl.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'minecraft:water_bucket' }],
        "processing_time": 50,
        results: [
            { id: 'minecraft:powder_snow_bucket'}
        ]
    })

    
    console.info('JCL: Create Washing Recipes has been loaded.')
})