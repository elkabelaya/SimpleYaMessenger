module.exports = api => {
    
    return {
        presets: [
          '@babel/preset-env',
            [

                '@babel/preset-typescript',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
    };

};
