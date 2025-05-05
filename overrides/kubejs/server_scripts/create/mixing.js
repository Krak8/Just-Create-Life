ServerEvents.recipes(jcl => {
    
    // cobble generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        ingredients: [{ type: 'fluid_stack', amount: 50, fluid: 'minecraft:water'}, { type: 'fluid_stack', amount: 50, fluid: 'minecraft:lava'}],
        results: [{ count: 32, id: 'minecraft:cobblestone' }, { amount: 50, id: 'minecraft:water' }, { amount: 50, id: 'minecraft:lava' }]
    })

    // stone generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        ingredients: [{ item: 'minecraft:smooth_stone' }, { type: 'fluid_stack', amount: 50, fluid: 'minecraft:water'}, { type: 'fluid_stack', amount: 50, fluid: 'minecraft:lava'}],
        results: [{ count: 32, id: 'minecraft:stone' }, { id: 'minecraft:smooth_stone'}, { amount: 50, id: 'minecraft:water' }, { amount: 50, id: 'minecraft:lava' }]
    })

    // obsidian generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        heat_requirement: 'heated',
        ingredients: [{ type: 'fluid_stack', amount: 250, fluid: 'minecraft:water'}, { type: 'fluid_stack', amount: 250, fluid: 'minecraft:lava'}],
        results: [{ count: 4, id: 'minecraft:obsidian' }]
    })

    // basalt generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        ingredients: [{ item:  'minecraft:blue_ice' }, { item: 'minecraft:soul_soil' }, { type: 'fluid_stack', amount: 50, fluid: 'minecraft:lava'}],
        results: [{ count: 32, id: 'minecraft:basalt' }, { id: 'minecraft:blue_ice' }, { id: 'minecraft:soul_soil' }, { amount: 50, id: 'minecraft:lava' }]
    })
    
    // limestone generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        ingredients: [{ type: 'fluid_stack', amount:250, fluid: 'create:honey' }, { type: 'fluid_stack', amount: 250, fluid: 'minecraft:lava'}],
        results: [{ count: 32, id: 'create:limestone' }, { amount: 250, id: 'create:honey' }, { amount: 250, id: 'minecraft:lava' }]
    })

    // scoria generator
    jcl.custom({
        type: 'create:mixing',
        processing_time: 41,
        ingredients: [{ type: 'fluid_stack', amount: 250, fluid: 'minecraft:lava' }, { type: 'fluid_stack', amount: 250, fluid: 'create:chocolate' }],
        results: [{ count: 32, id: 'create:scoria' }, { amount: 250, id: 'minecraft:lava' }, { amount: 250, id: 'create:chocolate' }]
    })

    console.info('JCL: Create Mixing Recipes has been loaded.')
})