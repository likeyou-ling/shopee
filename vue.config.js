module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'css': '@/assets/css',
                'component': '@/components',
                'network': '@/network',
                'views': '@/views',
                'assets': '@/assets'          
            }
        }
    }
}