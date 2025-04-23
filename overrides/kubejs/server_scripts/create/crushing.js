ServerEvents.recipes(jcl => {
    
    // adding new recipes to make both resources from basalt with different percentages.
    jcl.custom({
        type: 'create:crushing',
        ingredients: [{ item: 'minecraft:basalt' }],
        processing_time: 150,
        results: [
            { chance: 0.70, id: 'createsifter:crushed_basalt' },
            { chance: 0.30, id: 'garnished:brittle_dust' }
        ]
    })

    jcl.custom({
        type: 'create:milling',
        ingredients: [{ item: 'minecraft:basalt' }],
        "processing_time": 50,
        results: [
            { chance: 0.30, id: 'createsifter:crushed_basalt' },
            { chance: 0.70, id: 'garnished:brittle_dust' }
        ]
    })

    jcl.custom({
        type: 'create:milling',
        ingredients: [{ item: 'createsifter:crushed_netherrack' }],
        "processing_time": 50,
        results: [
            { chance: 0.40, id: 'create_mf:sulfur' },
            { chance: 0.600, id: 'create_mf:saltpeter' },
            { id: 'create_mf:saltpeter'}
        ]
    })

    
    console.info('JCL: Create Crushing Recipes has been loaded.')
})