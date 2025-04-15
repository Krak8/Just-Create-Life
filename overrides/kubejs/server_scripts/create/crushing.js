ServerEvents.recipes(jcl => {
    // removing original recipes
    jcl.remove({ output: 'createsifter:crushed_basalt' })
    jcl.remove({ output: 'garnished:brittle_dust' })
    
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
    console.info('JCL: Crushing.js has been loaded.')
})