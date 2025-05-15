ServerEvents.recipes(jcl => {

    jcl.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'minecraft:water_bucket' }],
        processing_time: 50,
        results: [
            { id: 'minecraft:powder_snow_bucket'}
        ]
    })


    // Bulk Processing for crushed ores
    jcl.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'create_compressed:crushed_copper_pile' }],
        processing_time: 10,
        results: [
            { id: 'minecraft:copper_ingot', count: 9 },
            { chance: 0.50, id: 'minecraft:clay'}
        ]
    })

    jcl.custom({ 
        type: 'create:splashing',
        ingredients: [{ item: 'create_compressed:crushed_iron_pile' }],
        processing_time: 10,
        results: [
            { id: 'minecraft:iron_ingot', count: 9 },
            { chance: 0.75, id: 'minecraft:redstone_block'}
        ]
    })

    jcl.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'create_compressed:crushed_gold_pile' }],
        processing_time: 10,
        results: [
            { id: 'minecraft:gold_ingot', count: 9 },
            { chance: 0.60, id: 'minecraft:quartz', count: 9},
            { chance: 0.20, id: 'minecraft:quartz', count: 3}
        ]
    })

    jcl.custom({
        type: 'create:splashing',
        ingredients: [{ item: 'create_compressed:crushed_zinc_pile' }],
        processing_time: 10,
        results: [
            { id: 'create:zinc_ingot', count: 9 },
            { chance: 0.30, id: 'minecraft:gunpowder', count: 3},
            { chance: 0.50, id: 'minecraft:gunpowder', count: 9}
        ]
    })
        
    
    console.info('JCL: Create Washing Recipes has been loaded.')
})