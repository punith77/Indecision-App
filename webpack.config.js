//Entry point:- where does our application kickoff
//Output- should say where we are putting final code

const path=require('path')

console.log()

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }, {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'

            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase:path.join(__dirname, 'public')
    }

};